'use strict';

const input = 'stressed';
const output = input.split('').reduce((s, t)=>{return t + s});
console.log(output);
