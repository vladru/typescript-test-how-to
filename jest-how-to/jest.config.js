module.exports = {
    globals: {
        "ts-jest": {
            tsConfig: "tsconfig.json"
        }
    },
    moduleFileExtensions: [
        "ts", "js"
    ],
    transform: {
        "^.+\\.ts$": "ts-jest"
    },
    testMatch: [
        "<rootDir>/test/**/*.test.ts"
    ],
    collectCoverageFrom: ["<rootDir>/src/**/*.{ts,js}"],
    collectCoverage: true,
    testEnvironment: "node",
    reporters: [
        "default",
        [ "jest-junit",
            {
                suiteName: "jest tests",
                outputDirectory: "./reports/junit",
                outputName: "test.xml"
            }
        ]
    ],
    coverageDirectory: "./reports/coverage",
    coverageReporters: [
        "lcov",
        "clover"
    ]
};
