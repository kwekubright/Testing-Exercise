const calculator = require('../calculator');

describe('calculator', () => {
  describe('add', () => {
    test('adds two numbers', () => {
      expect(calculator.add(1, 2)).toBe(3);
    });

    test('adds two negative numbers', () => {
      expect(calculator.add(-1, -2)).toBe(-3);
    });

    test('adds a positive and a negative number', () => {
      expect(calculator.add(1, -2)).toBe(-1);
    });
  });

  describe('subtract', () => {
    test('subtracts two numbers', () => {
      expect(calculator.subtract(3, 2)).toBe(1);
    });

    test('subtracts two negative numbers', () => {
      expect(calculator.subtract(-3, -2)).toBe(-1);
    });
    test('subtracts a positive and a negative number', () => {
      expect(calculator.subtract(3, -2)).toBe(5);
    });
  });

  describe('multiply', () => {
    test('multiplies two numbers', () => {
      expect(calculator.multiply(2, 2)).toBe(4);
    });

    test('multiplies a positive and negative number', () => {
      expect(calculator.multiply(-5, 10)).toBe(-50);
    });

    test('multiplies two negative numbers', () => {
      expect(calculator.multiply(-3, -4)).toBe(12)
    });
  });

  describe('divide', () => {
    test('divides two postive numbers', () => {
      expect(calculator.divide(6, 2)).toBe(3);
    });

    test('divides a positive and negative number', () => {
      expect(calculator.divide(-6, 2)).toBe(-3);
    });

    test('divides two negative numbers', () => { 
      expect(calculator.divide(-6, -2)).toBe(3);
    })
  })
});