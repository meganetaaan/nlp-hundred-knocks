'use strict';

const input = 'Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can.';
const getFirstIdxSet = new Set([1, 5, 6, 7, 8, 9, 15, 16, 19]);

const result = new Map();
const arr = input.split(' ');
for(let e of arr.entries()){
  const idx = e[0] + 1, word = e[1];
  const n = getFirstIdxSet.has(idx) ? 1 : 2;
  result.set(idx, word.slice(0, n));
}

console.log(result);
