'use strict';

const input1 = 'パトカー';
const input2 = 'タクシー';

const arr = [];
for(let i = 0; i < input1.length; i++){
  arr.push(input1[i]);
  arr.push(input2[i]);
}

const output = arr.join('');
console.log(output);
