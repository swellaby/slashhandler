module.exports = {
    globals: {
        'ts-jest': {
            'tsConfig': 'tsconfig.json'
        }
    },
    coverageDirectory: '.coverage/unit',
    coveragePathIgnorePatterns: [
        '/node_modules/'
    ],
    collectCoverageFrom: [
        'src/**/*.ts'
    ],
    coverageReporters: [
        'html',
        'lcov',
        'cobertura',
        'text',
        'text-summary'
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        }
    },

    reporters: [
        'default',
        [
            'jest-junit',
            {
                outputDirectory: '.testresults/unit',
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