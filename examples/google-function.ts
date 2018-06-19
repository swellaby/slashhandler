import { Response, Request } from 'express';
import { SlackBot } from '../src';
import { commandHandler } from './command-handler';

export const botHandler: (req: Request, res: Response) => void = (req, res) => {
    const bot = new SlackBot('your token');
    bot.registerCommand('slashhandler', commandHandler);
    bot.processMessage(req, res);
};