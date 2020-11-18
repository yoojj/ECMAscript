const { defaults } = require('jest-config');



module.exports = {
    //verbose: true,

    moduleDirectories: ['node_modules'],

    moduleNameMapper: {
        '@/(.*)$': '<rootDir>/src/$1',
    },

    resolver: null,

    testMatch: [
        '<rootDir>/**/*.test.(js|jsx|ts|tsx)',
    ],

    transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
