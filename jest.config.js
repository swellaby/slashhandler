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
    transform: {
        '^.+\\.ts?$': 'ts-jest'
    },
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    testMatch: ['**/test/*.+(ts|js)'],
    testEnvironment: 'node'
};