import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

// Pengujian ketika kedua parameter adalah angka positif
test('sum should return correct sum for two positive numbers', () => {
  assert.strictEqual(sum(2, 3), 5); // 2 + 3 = 5
});

// Pengujian ketika salah satu parameter adalah angka negatif
test('sum should return 0 if one of the parameters is negative', () => {
  assert.strictEqual(sum(-2, 3), 0); // -2 is negative, should return 0
  assert.strictEqual(sum(2, -3), 0); // -3 is negative, should return 0
});

// Pengujian ketika kedua parameter adalah angka negatif
test('sum should return 0 if both parameters are negative', () => {
  assert.strictEqual(sum(-2, -3), 0); // Both are negative, should return 0
});

// Pengujian ketika salah satu parameter bukan angka (misalnya string)
test('sum should return 0 if one of the parameters is not a number', () => {
  assert.strictEqual(sum('2', 3), 0); // '2' is a string, should return 0
  assert.strictEqual(sum(2, '3'), 0); // '3' is a string, should return 0
  assert.strictEqual(sum('a', 'b'), 0); // both are strings, should return 0
  assert.strictEqual(sum(null, 3), 0); // null is not a number, should return 0
});

// Pengujian ketika salah satu parameter adalah angka 0
test('sum should return the correct sum when one parameter is zero', () => {
  assert.strictEqual(sum(0, 3), 3); // 0 + 3 = 3
  assert.strictEqual(sum(2, 0), 2); // 2 + 0 = 2
});

// Pengujian ketika kedua parameter adalah angka 0
test('sum should return 0 when both parameters are zero', () => {
  assert.strictEqual(sum(0, 0), 0); // 0 + 0 = 0
});
