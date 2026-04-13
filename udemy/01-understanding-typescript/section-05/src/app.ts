const userName = 'Max';
// userNmae = 'Kim';

// let age = 30;
// age = 20;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;

//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

const add = (a: number, b: number = 1) => {
  return a + b;
};
const add2 = (a: number = 4, b: number) => a + b;

console.log(add(2, 5));

// Arrow Functions
const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button = document.querySelector('button');
if (button) {
  button.addEventListener('click', (event) => console.log(event));
}

// Default Function Parameters
printOutput(add(3)); // 4
printOutput(add2(4, 5)); // 4

// Spread Operator (...)
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies); // 전개 연산자 사용

const person = {
  firstName: 'Max',
  age: 30,
};

// key-value pairs 가 추출되서 들어가진다.
const copiedPerson = { ...person };

// Rest Parameters (...)
const add3 = (...numbers: number[]) => {
  // (...number: [number, number, number]) 같이 3개만 입력 받게 처리 가능
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add3(5, 10, 2, 3, 7);
console.log(addedNumbers);

// Destructuring (Array & Object)
const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName: userName2, age } = person;

console.log(userName2, age);
