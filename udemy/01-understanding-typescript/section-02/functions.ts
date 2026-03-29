// Function Return Value Type
function add2(a: number, b: number): number {
  return a + b;
}

// Void Type
function log(message: string): void {
  console.log(message);
}

// Never Type
// - void : 함수 정상적으로 종료 O, 반환값 X
// - never : 함수 정상적으료 종료 X, 반환값 X (에러 발생 등)
function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);

  throw new Error(errorMessage);
}

// Functions as Types
// - () => void 와 같이 함수 타입을 지정할 수 있다.
function performJob(cb: (msg: string) => void) {
  // ...
  cb('Job Done!');
}

const logMsg = (msg: string) => {
  console.log(msg);
};

performJob(logMsg);

type User3 = {
  name: string;
  age: number;
  greet: () => string;
};

let user3: User3 = {
  name: 'Max',
  age: 39,
  greet() {
    console.log('Hello There!');

    // string 반환
    return this.name;
  },
};

user3.greet();
