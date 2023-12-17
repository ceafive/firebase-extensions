module.exports = {
  rootDir: "./",
  testMatch: ["**/__tests__/**/*.test.ts"],
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        isolatedModules: true,
      },
    ],
  },
  collectCoverage: true,
  collectCoverageFrom: ["**/*.{ts,tsx}"],
  coverageReporters: ["json-summary", "lcov", "text"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  setupFiles: ["<rootDir>/.jest/setEnvVars.js"],
};
