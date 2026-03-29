// 초기값이 있으면 타입 추론 사용, 초기값이 없으면 타입 명시 사용
let userName: string;
let userAge = 38; // 타입 추론 진행 (number)

// ...

userName = 'Max';
// userAge = '34';  // Error

function add(a: number, b = 5) {
  return a + b;
}

add(10);
// add('10'); // error
add(10, 6);
// add(10, '6');  // error
