let hobbies = ['Sports', 'Cooking']; // 타입 추론 (string[])

// hobbies,push(10);  // error

// string[] or number[] 타입 (1)
let users: (string | number)[];

users = [1, 'Max'];
users = [5, 1];
users = ['Max', 'Anna'];

// string[] or number[] 타입 (2)
let users2: Array<string | number>; // generic

users2 = [1, 'Max'];
users2 = [5, 1];
users2 = ['Max', 'Anna'];

// Tuple 타입
// - 개수, 타입 엄격 제한
let possibleResults: [number, number]; // [1, -1]

possibleResults = [1, -1];
// possibleResults = [5, 10, 12]; // error

// Object 타입
let user: {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  };
} = {
  name: 'Max',
  age: 38,
  hobbies: ['Sports', 'Cooking'],
  role: {
    description: 'admin',
    id: 5,
  },
};

// Must not be null 타입
// - {} : null과 undefined를 제외한 모든 값 허용
let val1: {} = 'some text';
// let val2: {} = null;  // error
// let val3: {} = undefined;  // error
let val4: {} = {};
let val5: {} = [];
let val6: {} = false;
let val7: {} = 28;

// Record Type
const someObj = {
  name: 'Max',
  1: 'test',
};

let data: Record<string, number | string>;

data = {
  entry1: 1,
  entry2: 'some string',
};
