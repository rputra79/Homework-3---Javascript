const { test } = require('@jest/globals');
const Convert = require('./script');

test("test cel to rea", () => {
    const transform = new Convert();
    expect(transform.fromCelcius('rea',123)).toBe(98.4);
  });