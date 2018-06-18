// tslint:disable:no-any
import { SlackBot } from '../src';

const token = 'a token';

describe('slackbot', () => {
    let sut: SlackBot;
    
    beforeEach(() => {
        sut = new SlackBot(token);
    });

    describe('command registration', () => {
        it('can register', () => {
            sut.registerCommand('cmd', { helpText: 'not helpful', handlers: {
                pathOne: jest.fn()
            }});

            expect(sut.isCommandRegistered('cmd')).toBeTruthy();
        });

        it('knows if not registered', () => {
            expect(sut.isCommandRegistered('cmd')).toBeFalsy();
        });
    });

    describe('processMessage', () => {
        let handlerOneSpy: jest.Mock;
        let handlerTwoSpy: jest.Mock;
        let sendSpy: jest.Mock;

        beforeEach(() => {
            handlerOneSpy = jest.fn();
            handlerTwoSpy = jest.fn();
            sendSpy = jest.fn();
            sut.registerCommand('cmd', { helpText: 'not helpful', handlers: {
                pathOne: handlerOneSpy,
                pathTwo: handlerTwoSpy
            }});
        });

        it('should call correct handler', () => {
            const req = { body: { token: token, command: '/cmd', text: 'pathTwo' } };
            const res = { send: sendSpy };
            sut.processMessage(<any>req, <any>res);
            expect(handlerTwoSpy).toHaveBeenCalledWith(req.body, res);
        });

        describe('verification', () => {
            it('should throw error if invalid slack token', () => {
                expect(() => sut.processMessage(
                    <any>{ body: { token: 'wrong token', command: '/cmd' } },
                    <any>{ send: sendSpy }
                )).toThrow('Invalid Slack credentials');
            });

            it('should throw error if no slack token', () => {
                expect(() => sut.processMessage(
                    <any>{ body: { command: '/cmd' } },
                    <any>{ send: sendSpy }
                )).toThrow('Invalid Slack credentials');
            });

            it('should throw error if no handler', () => {
                expect(() => sut.processMessage(
                    <any>{ body: { token: token, command: '/command' } },
                    <any>{ send: sendSpy }
                )).toThrow('/command not supported by this bot');
            });
        });

        describe('help', () => {
            it('should send help text if no text', () => {
                sut.processMessage(
                    <any>{ body: { token: token, command: '/cmd' } },
                    <any>{ send: sendSpy }
                );
                expect(sendSpy).toHaveBeenCalledWith('not helpful');
            });

            it('should send help text if help', () => {
                sut.processMessage(
                    <any>{ body: { token: token, command: '/cmd', text: 'help' } },
                    <any>{ send: sendSpy }
                );
                expect(sendSpy).toHaveBeenCalledWith('not helpful');
            });

            it('should send help text if no handler exists', () => {
                sut.processMessage(
                    <any>{ body: { token: token, command: '/cmd', text: 'pathThree' } },
                    <any>{ send: sendSpy }
                );
                expect(sendSpy).toHaveBeenCalledWith('not helpful');
            });

            it('should not send help text if handler exists', () => {
                sut.processMessage(
                    <any>{ body: { token: token, command: '/cmd', text: 'pathTwo' } },
                    <any>{ send: sendSpy }
                );
                expect(sendSpy).not.toHaveBeenCalledWith('not helpful');
            });
        });
    });
});