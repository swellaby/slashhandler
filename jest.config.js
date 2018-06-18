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
    transform: {
        '^.+\\.ts?$': 'ts-jest'
    },
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    testMatch: ['**/test/*.+(ts|js)'],
    testEnvironment: 'node'
};