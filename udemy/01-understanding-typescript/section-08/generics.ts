// [1] A Generic Type We Already Know
let names1: Array<string> = ['Max', 'Kim']; // Generic 타입 사용
let names2: string[] = ['Max', 'Kim'];

// [2] Understanding Generic Types
let names3: Array<string> = ['Max', 'Kim'];

// [3] Creating & Using a Generic Type
type DataStore<T> = {
  // 어떠한 단어도 입력 가능하지만, 관습적으로 'T' 사용
  [prop: string]: T;
};

let store: DataStore<string | boolean> = {};
store.name = 'Max';
store.isIntstructor = true;

let nameStore: DataStore<string> = {};
nameStore.name = 'kim';

// [4] Generic Functions & Interfaces
function merge<T>(a: T, b: T) {
  return [a, b];
}

const ids = merge<number>(1, 2);
const ids2 = merge(1, 2); // 타입 자동 추론 (number)

// [5] Working with Multiple Generic Parameters
function merge2<T, U>(a: T, b: U) {
  return [a, b];
}

const ids3 = merge2<number, string>(1, 'Kim');
const ids4 = merge2(1, 'Kim'); // 타입 자동 추론 (number)

// [6] Generics & Constraints
function mergeObj(a: any, b: any) {
  return { ...a, ...b };
}

const merged = mergeObj(1, 2);
console.log(merged); // {}

// extends 키워드 사용
function mergeObj2<T extends object>(a: T, b: T) {
  return { ...a, ...b };
}

const merged2 = mergeObj2({ userName: 'Max' }, { age: 35 });
console.log(merged2); // { userName: Max, age: 35 }

// [7] Constraints & Multiple Generic Types
function mergeObj3<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}

const merged3 = mergeObj3({ userName: 'Max' }, { age: 35 });
console.log(merged3); // { userName: Max, age: 35 }

// [8] Working with Generic Classes & Interfaces
class User<T> {
  constructor(public id: T) {}
}

const user = new User('i1');
user.id = 'i2';

interface Role<T> {
  role: T;
}
