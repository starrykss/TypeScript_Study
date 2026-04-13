// [1] Extracting Keys with 'keyof'
type User = {
  name: string;
  age: number;
};

type UserKeys = keyof User;

let validKey: UserKeys; // 'name' | 'age'

validKey = 'name';
validKey = 'age';

// [2] 'keyof' & A More Useful Example
function getProp<T extends object, U extends keyof T>(obj: T, key: U) {
  // key 파라미터에는 obj 객체의 키만 넣을 수 있다.
  const val = obj[key];

  if (val === undefined || val === null) {
    throw new Error('Accessing undefined or null value.');
  }

  return val;
}

const data = {
  id: 1,
  isStored: false,
  values: [1, -5, 10],
};
const isStored = getProp(data, 'isStored');

const user = {
  name: 'kim',
  age: 35,
};

const val = getProp(user, 'age');
