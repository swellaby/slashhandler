import { Response } from 'express';
import { SlackEvent } from '../src';

export const commandHandler = {
    handlers: {
        hello: (event: SlackEvent, res: Response) => {
           res.send('hello');
        }
    },
    helpText: 'You are not doing it right'
};