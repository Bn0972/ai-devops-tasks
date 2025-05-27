I'll help you create a complete Jest testing setup for the sum function.

First, let's create the necessary project structure:







Here's a complete explanation of the setup:

**What is Jest?**
Jest is a JavaScript testing framework created by Facebook. It's known for:
- Zero configuration setup
- Built-in assertion library
- Code coverage reporting
- Watch mode for development
- Mocking capabilities

**Project Structure:**
```
jest-testing-demo/
├── package.json
├── src/
│   ├── math.js
│   └── math.test.js
└── node_modules/
```

**Installation Steps:**
1. Create a new directory and navigate to it:
```bash
mkdir jest-testing-demo
cd jest-testing-demo
```

2. Initialize a new Node.js project:
```bash
npm init -y
```

3. Install Jest as a dev dependency:
```bash
npm install --save-dev jest
```

**Running Tests:**
1. Run all tests once:
```bash
npm test
```

2. Run tests in watch mode (tests re-run when files change):
```bash
npm run test:watch
```

**Test File Explanation:**
```javascript
// math.test.js
const { sum } = require('./math');

describe('sum function', () => {
  // Test case 1
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  // Test case 2
  test('adds -1 + 1 to equal 0', () => {
    expect(sum(-1, 1)).toBe(0);
  });

  // Test case 3
  test('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
});
```

**Key Jest Concepts:**
- `describe`: Groups related tests
- `test` or `it`: Individual test cases
- `expect`: Makes assertions
- `toBe`: Matcher for exact equality

**Test Coverage:**
To see test coverage, add this to package.json:
```json
{
  "scripts": {
    "test:coverage": "jest --coverage"
  }
}
```

Then run:
```bash
npm run test:coverage
```

**Best Practices:**
1. Name test files with `.test.js` or `.spec.js`
2. Group related tests using `describe`
3. Write clear test descriptions
4. Test edge cases and error conditions
5. Keep tests simple and focused

Would you like me to explain any part in more detail or add more test cases?
