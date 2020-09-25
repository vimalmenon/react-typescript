module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.tsx"
  ],
  resolver: "jest-webpack-resolver"
};