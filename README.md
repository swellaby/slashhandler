# Slashhandler

Framework for building slash command handlers

![](https://img.shields.io/circleci/project/github/swellaby/slashhandler.svg)
![](https://img.shields.io/codecov/c/github/swellaby/slashhandler.svg)
![](https://img.shields.io/npm/v/@swellaby/slashhandler.svg)

## How to use?

1. New up a slackbot with the verification token from slack.
2. Register commands using the `registerCommand` method.
3. Pass slack requests into the bot using the `processMessage` method.

### Examples

* [Google Functions Simple](../examples/google-function.ts)
* [Google Functions (full w/ deploy)](https://github.com/beverts312/soundboard-slackbot)
