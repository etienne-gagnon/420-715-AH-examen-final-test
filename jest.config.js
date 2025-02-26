module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '\\.spec\\.js$'],
  reporters: [
    "default",
    ["jest-junit", { outputDirectory: "./reports", outputName: "jest-report.xml" }]
  ]
};