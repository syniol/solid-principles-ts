module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  // transform: {
  //   '^.+\\.ts?$': 'ts-jest',
  // },
  testRegex: '(.*)(example).(ts)$',
  collectCoverageFrom: ['src/**/*.ts'],
  collectCoverage: false,
};