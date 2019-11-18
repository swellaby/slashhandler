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
            'tsConfig': 'tsconfig.json'
        }
    },
    reporters: [
        'default',
        [
            'jest-junit',
            {
                outputDirectory: '.testresults',
                outputName: 'junit.xml'
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