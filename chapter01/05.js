'use strict';

function charNgram(str, n){
  if(typeof(str) === 'Array'){
    return wordNgram(str.join(' '), n);
  }
  if(n !== 2){
    throw new Error('not implemented');
  }
  const dict = {};
  for(let i = 0, len = str.length; i < len - 1; i++){
    dict[str[i]] = dict[str[i]] || {};
    const count = dict[str[i]][str[i + 1]];
    dict[str[i]][str[i + 1]] =  typeof(count) === 'undefined' ? 1 : count + 1;
  }

  return dict;
}

function wordNgram(arr, n){
  if(typeof(arr) === 'string' || typeof(arr) === 'String'){
    return wordNgram(arr.split('\ '), n);
  }
  if(n !== 2){
    throw new Error('not implemented');
  }
  const dict = {};
  for(let i = 0, len = arr.length; i < len - 1; i++){
    dict[arr[i]] = dict[arr[i]] || {};
    const count = dict[arr[i]][arr[i + 1]];
    dict[arr[i]][arr[i + 1]] =  typeof(count) === 'undefined' ? 1 : count + 1;
  }

  return dict;
}

const input = 'I am an NLPer';
console.log(wordNgram(input, 2));
console.log(charNgram(input, 2));
