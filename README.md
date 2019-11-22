# Slashhandler
Framework for building slash command handlers

[![npm Version Badge][npm-version-badge]][npm-package-url]
[![npm Downloads Badge][npm-downloads-badge]][npm-package-url]
[![License Badge][license-badge]][license-url]  

[![Linux CI Badge][linux-ci-badge]][linux-ci-url]
[![Mac CI Badge][mac-ci-badge]][mac-ci-url]
[![Windows CI Badge][windows-ci-badge]][windows-ci-url]  

[![Test Results Badge][tests-badge]][tests-url]
[![Coverage Badge][coverage-badge]][coverage-url]
[![Sonar Quality GateBadge][quality-gate-badge]][sonar-project-url]  

## How to use?

1. New up a slackbot with the verification token from slack.
2. Register commands using the `registerCommand` method.
3. Pass slack requests into the bot using the `processMessage` method.

### Examples

* [Google Functions Simple](./examples/google-function.ts)
* [Google Functions (full w/ deploy)](https://github.com/beverts312/soundboard-slackbot)
* [Express Webserver Simple](./examples/express.ts)

[npm-version-badge]: https://img.shields.io/npm/v/@swellaby/slashhandler?style=flat-square
[npm-downloads-badge]: https://img.shields.io/npm/dt/@swellaby/slashhandler?style=flat-square
[npm-package-url]: https://www.npmjs.com/package/slashhandler
[license-url]: https://github.com/swellaby/slashhandler/blob/master/LICENSE
[license-badge]: https://img.shields.io/github/license/swellaby/slashhandler?style=flat-square&color=blue
[linux-ci-badge]: https://img.shields.io/azure-devops/build/swellaby/opensource/163/master?label=linux%20build&style=flat-square
[linux-ci-url]: https://dev.azure.com/swellaby/OpenSource/_build/latest?definitionId=163
[mac-ci-badge]: https://img.shields.io/azure-devops/build/swellaby/opensource/159/master?label=mac%20build&style=flat-square
[mac-ci-url]: https://dev.azure.com/swellaby/OpenSource/_build/latest?definitionId=159
[windows-ci-badge]: https://img.shields.io/azure-devops/build/swellaby/opensource/160/master?label=windows%20build&style=flat-square
[windows-ci-url]: https://dev.azure.com/swellaby/OpenSource/_build/latest?definitionId=160
[coverage-badge]: https://img.shields.io/azure-devops/coverage/swellaby/opensource/163/master?style=flat-square
[coverage-url]: https://codecov.io/gh/swellaby/slashhandler
[tests-badge]: https://img.shields.io/azure-devops/tests/swellaby/opensource/163/master?label=unit%20tests&style=flat-square
[tests-url]: https://dev.azure.com/swellaby/OpenSource/_build/latest?definitionId=163&view=ms.vss-test-web.build-test-results-tab
[quality-gate-badge]: https://img.shields.io/sonar/quality_gate/swellaby:slashhandler?server=https%3A%2F%2Fsonarcloud.io&style=flat-square
[sonar-project-url]: https://sonarcloud.io/dashboard?id=swellaby%3Aslashhandler
