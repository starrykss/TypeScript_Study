// [1] Index Types
type DataStore = {
  [prop: string]: number | boolean;
};

let store: DataStore = {};

// ...

store.id = 5;
store.isOpen = false;
// store.name = 'Kim'; // error

// [2] Constant Types with 'as const'
// -> 타입을 최대한 좁힘.
let roles = ['admin', 'guest', 'editor'] as const; // TypeScript 기능
// roles.push('Max');  // error

const firstRole = roles[0]; // admin

// [3] Revisiting The 'Record' Type
// 아래의 두 타입은 완전히 동일하다.
type Target = {
  [prop: string]: number | boolean;
};

let someObj: Record<string, number | boolean>;

// [4] 'satisfies' Keyword
const dataEntries = {
  entry1: 0.51,
  entry2: -1.23,
} satisfies Record<string, number>;

// ...

// dataEntries.entry3; // error
dataEntries.entry2; // ok
