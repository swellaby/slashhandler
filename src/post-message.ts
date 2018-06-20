import { request } from 'https';

/**
 * Posts a message to slack
 * @export
 * @param {string} message to post
 * @param {string} path to post message to
 * @param {('ephemeral' | 'in_channel')} [responseType='in_channel']
 */
export function postMessage(message: string, path: string, responseType: 'ephemeral' | 'in_channel' = 'in_channel'): void {
    const req = request({
        headers: {
            'Content-Type': 'application/json'
        },
        host: 'hooks.slack.com',
        path: path,
        method: 'POST'
    });
    req.write(JSON.stringify({
        response_type: responseType,
        text: message
    }));
    req.end();
}