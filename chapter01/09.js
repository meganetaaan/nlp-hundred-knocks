'use strict';

const input = "I couldn't believe that I could actually understand what I was reading : the phenomenal power of the human mind ."

function randomIn(from, to){
  return Math.floor((to - from) * Math.random() + from);
}

function shuffle(word){
  if(word.length <= 4){
    return word;
  }
  const result = [];
  for(let i = 1, len = word.length - 1; i < len; i++){
    const c = word[i];
    result.splice(randomIn(0, result.length - 1), 0, c);
  }
  result.unshift(word[0]);
  result.push(word[word.length - 1]);
  return result.join('');
}

function typoglycemia(str){
  return str.split(' ').map(shuffle).join(' ');
}

console.log(typoglycemia(input));
