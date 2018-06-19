# Slashhandler
Framework for building slash command handlers

[![npm Version Badge][npm-version-badge]][npm-package-url]
[![npm Downloads Badge][npm-downloads-badge]][npm-package-url]
[![License Badge][license-badge]][license-url]  

[![CircleCI Badge][circleci-badge]][circleci-url]
[![AppVeyor Badge][appveyor-badge]][appveyor-url]
[![Test Results Badge][tests-badge]][appveyor-url]
[![Codecov Badge][codecov-badge]][codecov-url]
[![Sonar Quality Gate Badge][sonar-quality-gate-badge]][sonar-url]

## How to use?

1. New up a slackbot with the verification token from slack.
2. Register commands using the `registerCommand` method.
3. Pass slack requests into the bot using the `processMessage` method.

### Examples

* [Google Functions Simple](../examples/google-function.ts)
* [Google Functions (full w/ deploy)](https://github.com/beverts312/soundboard-slackbot)
* [Express Webserver Simple](../examples/express.ts)

[circleci-badge]: https://img.shields.io/circleci/project/github/swellaby/slashhandler.svg?label=linux%20build
[circleci-url]: https://circleci.com/gh/swellaby/slashhandler
[appveyor-badge]: https://img.shields.io/appveyor/ci/swellaby/slashhandler.svg?label=windows%20build
[appveyor-url]: https://ci.appveyor.com/project/swellaby/slashhandler
[tests-badge]: https://img.shields.io/appveyor/tests/swellaby/slashhandler.svg
[codecov-badge]: https://img.shields.io/codecov/c/github/swellaby/slashhandler.svg
[codecov-url]: https://codecov.io/gh/swellaby/slashhandler
[npm-version-badge]: https://img.shields.io/npm/v/@swellaby/slashhandler.svg
[npm-downloads-badge]: https://img.shields.io/npm/dt/@swellaby/slashhandler.svg
[npm-package-url]: https://www.npmjs.com/package/@swellaby/slashhandler
[license-url]: ./LICENSE
[license-badge]: https://img.shields.io/github/license/swellaby/slashhandler.svg
[sonar-quality-gate-badge]: https://sonarcloud.io/api/project_badges/measure?project=swellaby%3Aslashhandler&metric=alert_status
[sonar-url]: https://sonarcloud.io/dashboard?id=swellaby%3Aslashhandler
