// Optional Values
function generateError(msg?: string) {
  throw new Error(msg);
}

generateError();
generateError('An error occurred!');

type User4 = {
  name: string;
  age: number;
  role?: 'admin' | 'guest';
};

// Nullish Coalescing (Nullish 병합, ??)
let input = null;
const didProvideInput = input || false; // false
console.log(didProvideInput); // false

let input2 = '';
const didProvideInput2 = input2 || false; // false
console.log(didProvideInput2); // false

let input3 = '';
const didProvideInput3 = input ?? false; // true
console.log(didProvideInput3); // '' (빈 문자열)
