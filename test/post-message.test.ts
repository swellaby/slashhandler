import * as https from 'https';
import { postMessage } from '../src';

describe('postMessage', () => {
    let writeSpy: jest.Mock;
    let endSpy: jest.Mock;
    let reqSpy: jest.Mock;

    beforeEach(() => {
        writeSpy = jest.fn();
        endSpy = jest.fn();
        reqSpy = jest.spyOn(https, 'request').mockReturnValue({ write: writeSpy, end: endSpy });
    });

    it('should build request prpoerly', () => {
        postMessage('message', 'path');
        expect(reqSpy).toHaveBeenCalled();
        expect(reqSpy.mock.calls[0][0]).toEqual({
            headers: { 'Content-Type': 'application/json' },
            host: 'hooks.slack.com',
            path: 'path',
            method: 'POST'
        });
        expect(writeSpy).toHaveBeenCalled();
        expect(JSON.parse(writeSpy.mock.calls[0][0])).toEqual({
            response_type: 'in_channel',
            text: 'message'
        });
    });

    it('should except responseType override', () => {
        postMessage('message', 'path', 'ephemeral');
        expect(reqSpy).toHaveBeenCalled();
        expect(reqSpy.mock.calls[0][0]).toEqual({
            headers: { 'Content-Type': 'application/json' },
            host: 'hooks.slack.com',
            path: 'path',
            method: 'POST'
        });
        expect(writeSpy).toHaveBeenCalled();
        expect(JSON.parse(writeSpy.mock.calls[0][0])).toEqual({
            response_type: 'ephemeral',
            text: 'message'
        });
    });
});