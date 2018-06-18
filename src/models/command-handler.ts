import { SlackHandler } from './handler';

/**
 * All the config for handling a command
 * @export
 * @class CommandHandler
 */
export class CommandHandler {
    /**
     * This object should have keys indicating the command to process with values being the handler function for that command
     * @type {{ [key: string]: SlackHandler }}
     * @memberof CommandHandler
     */
    public handlers: { [key: string]: SlackHandler };

    /**
     * Message to send when "help" or other unregistered text is passed to the bot
     * @type {string}
     * @memberof CommandHandler
     */
    public helpText?: string;
}