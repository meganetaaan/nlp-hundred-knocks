'use strict';

const input = 'Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics.';
const output = input.split(' ').map(word => {return word.replace(/[,.]/,'').length});

console.log(output);
