const inputEl = document.getElementById('user-name');

// Type Narrowing (타입 좁히기)
if (!inputEl) {
  throw new Error('Element not found!');
}

// Optional Chaining
console.log(inputEl?.value);

// Not Null
const inputEl2 = document.getElementById('user-name')!;

// Type Assertion (타입 단언)
const inputEl3 = document.getElementById(
  'user-name',
) as HTMLInputElement | null;

console.log(inputEl3?.value);
