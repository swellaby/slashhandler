import { Request, Response } from 'express';
import { SlackEvent, CommandHandler } from './models';

export class SlackBot {
    private commandHandlers: { [key: string] : CommandHandler } = {};

    constructor(private token: string) {}

    public processMessage(req: Request, res: Response): void {
        const event: SlackEvent = req.body;
        this.verifyRequest(event);
        if (!event.text || event.text === 'help') {
            this.sendHelpText(event, res);
        } else {
            const handler = this.commandHandlers[this.getCommand(event)].handlers[event.text.split(' ')[0]];
            if (handler) {
                handler(event, res);
            } else {
                this.sendHelpText(event, res);
            }
        }
    }

    public registerCommand(command: string, handler: CommandHandler) {
        this.commandHandlers[command] = handler;
    }

    public readonly isCommandRegistered = (command: string): boolean => this.commandHandlers[command] !== undefined;

    private verifyRequest(body: SlackEvent): void {
        if (!body || body.token !== this.token) {
            throw new Error('Invalid Slack credentials');
        }
        if (!this.commandHandlers[this.getCommand(body)]) {
            throw new Error(`${body.command} not supported by this bot`);
        }
    }

    private sendHelpText(event: SlackEvent, res: Response): void {
        res.send(this.commandHandlers[this.getCommand(event)].helpText);
    }

    private readonly getCommand = (event: SlackEvent): string => event.command.substring(1);
}