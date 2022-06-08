const stringLength = require('../index.js');

test('stringLength', () => {
  expect(stringLength('hello')).toBe(5);
  expect(stringLength('world')).toBe(5);
});

test('stringLength throws error', () => {
  expect(() => stringLength('hello world')).toThrowError('string must be between 1 and 10 characters');
});
