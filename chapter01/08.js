'use strict';

const input = 'Hogehoge Fugafuga';

function cipher(str){
  const result = [];
  for(let i = 0, len = str.length; i < len; i++){
    let code = str.charCodeAt(i);
    code = code >= 97 && code <= 122 ? 219 - code : code;
    result.push(String.fromCharCode(code));
  }
  return result.join('');
}
console.log(cipher(input));
console.log(cipher(cipher(input)));
