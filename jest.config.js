module.exports = {
    roots: ["<rootDir>/src"],
    testEnvironment: 'node',
    transform: {
      "^.+\\.tsx?$": "ts-jest"
    },
    setupFilesAfterEnv: [
      "@testing-library/jest-dom/extend-expect"
    ],
    testRegex: "(*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
  };