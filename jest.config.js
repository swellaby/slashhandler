// const jestSonar = require('jest-sonar-reporter');
// const x = new jestSonar();
module.exports = {
    coverageDirectory: './coverage/',
    coveragePathIgnorePatterns: [
        '/node_modules/'
    ],
    collectCoverageFrom: [
        'src/**/*.ts'
    ],
    globals: {
        'ts-jest': {
            'tsConfigFile': 'tsconfig.json'
        }
    },
    reporters: [
        'default',
        [
            'jest-junit',
            {
                output: '.testresults/junit.xml'
            }
        ]
    ],
    testResultsProcessor: 'jest-sonar-reporter',
    transform: {
        '^.+\\.ts?$': 'ts-jest'
    },
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    testMatch: ['**/test/*.+(ts|js)'],
    testEnvironment: 'node'
};