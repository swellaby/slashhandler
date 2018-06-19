import { Request, Response } from 'express';
import { SlackEvent, CommandHandler } from './models';

/**
 * Handles slashcommands
 * @export
 * @class SlackBot
 */
export class SlackBot {
    private commandHandlers: { [key: string] : CommandHandler } = {};

    /**
     * Creates an instance of SlackBot.
     * @param {string} token Slack app token
     * @memberof SlackBot
     */
    constructor(private token: string) {}

    /**
     * Processes an incoming request from slack
     * @param {Request} req
     * @param {Response} res
     * @memberof SlackBot
     */
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

    /**
     * Registers a set of handlers for a command
     * @param {string} command
     * @param {CommandHandler} handler
     * @memberof SlackBot
     */
    public registerCommand(command: string, handler: CommandHandler) {
        if (!handler.helpText) {
            handler.helpText = 'You are not doing it right.';
        }
        this.commandHandlers[command] = handler;
    }

    /**
     * True if the command is regestered false otherwise
     * @memberof SlackBot
     */
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