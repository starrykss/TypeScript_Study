let age: any = 36; // 타입 지정 (any)

// ...

// any 타입은 다양한 타입을 허용한다.
// Vanilla JavaScript로 회귀
age = '37';
age = true;
age = {};
age = [];

// Union 타입(|) 사용하기
let tmp: string | number = 36;

tmp = 'Max';
tmp = 32;
// tmp = [];  // error
