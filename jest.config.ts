import { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json', 'vue'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '.*\\.(vue)$': '@vue/vue3-jest',
  },
  testMatch: ['**/tests/**/*.spec.(ts|js)'],
};

export default config;