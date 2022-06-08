const reverseString = require('../reverse.js');

test('reverseString', () => { 
  expect(reverseString('hello')).toBe('olleh');
});