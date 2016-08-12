'use strict';

const input1 = 'paraparaparadise';
const input2 = 'paragraph';

function getBigramSet(str){
  const result = new Set();
  for(let i = 0, len = str.length; i < len - 1; i++){
    result.add(str[i] + str[i + 1]);
  }
  return result;
}

function union(A, B){
  const result = new Set();
  for(let bigram of A.keys()){
    result.add(bigram);
  }
  for(let bigram of B.keys()){
    result.add(bigram);
  }
  return result;
}

function production(A, B){
  const result = new Set();
  for(let a of A.keys()){
    if(B.has(a)){
      result.add(a);
    }
  }
  return result;
}

function difference(A, B){
  const result = new Set();
  for(let a of A.keys()){
    result.add(a);
  }
  for(let b of B.keys()){
    result.delete(b);
  }
  return result;
}
const X = getBigramSet(input1);
const Y = getBigramSet(input2);

console.log(union(X, Y));
console.log(production(X, Y));
console.log(difference(X, Y));
console.log(difference(Y, X));
