const path = require('path')

module.exports = {
  displayName: 'exercise',
  roots: [path.join(__dirname, '../src')],
  testEnvironment: 'node',
  testMatch: ['**/exercises/*.test.js'],
  moduleDirectories: ['node_modules', __dirname],
  coverageDirectory: path.join(__dirname, '../coverage/final'),
  watchPlugins: [
    require.resolve('jest-watch-typeahead/filename'),
    require.resolve('jest-watch-typeahead/testname'),
  ],
}
