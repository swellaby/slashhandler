import * as express from 'express';
import { SlackBot } from '../src';
import { commandHandler } from './command-handler';

const app = express();
const bot = new SlackBot('your token');
bot.registerCommand('slashhandler', commandHandler);

app.post('/slashhandler', bot.processMessage);

app.listen(3000);