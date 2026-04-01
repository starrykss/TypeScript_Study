import fs from 'node:fs';
// Cannot find module 'node:/fs' or its corresponding type declarations.
// 터미널에서 npm install @types/node --save--dev 명령 실행해서 타입 설치하면 문제 해결

// fs.readFileSync();

let userName: string;

userName = 'Max';

console.log(userName);

function add(a: any, b: any) {
  return a + b;
}

console.log(add(1, 2));
