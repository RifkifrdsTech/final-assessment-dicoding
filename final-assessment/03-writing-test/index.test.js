import { test } from 'node:test';  // Impor test dari modul node:test
import assert from 'node:assert';  // Impor assert dari modul node:assert
import { sum } from './index.js';  // Impor fungsi sum dari index.js

// Menulis pengujian untuk fungsi sum
test('sum function should correctly add two numbers', (t) => {
  // Menguji penjumlahan dua angka positif
  assert.equal(sum(1, 2), 3);  // 1 + 2 = 3

  // Menguji penjumlahan angka positif dan negatif
  assert.equal(sum(-1, 1), 0); // -1 + 1 = 0

  // Menguji penjumlahan dua angka nol
  assert.equal(sum(0, 0), 0);  // 0 + 0 = 0

  // Menguji penjumlahan dengan angka desimal
  assert.equal(sum(2.5, 2.5), 5); // 2.5 + 2.5 = 5

  // Menguji penjumlahan angka besar
  assert.equal(sum(1000, 2000), 3000); // 1000 + 2000 = 3000
});
