// [1] Class Decorator
function logger<T extends new (...args: any[]) => any>(
  target: T,
  ctx: ClassDecoratorContext,
) {
  console.log('logger decorator');
  console.log(target);
  console.log(ctx);

  return class extends target {
    // 생성자 생성
    constructor(...args: any[]) {
      super(...args);

      console.log('class constructor');
      console.log(this);
    }
    age = 35;
  };
}

@logger
class Person {
  name = 'Kim';

  greet() {
    console.log('Hi, I am ' + this.name);
  }
}

const kim = new Person();
kim.greet(); // 기존 메서드 그대로 사용 가능
console.log(kim); // Person { name: 'Kim', age: 35 }

const julie = new Person();

// -> 클래스 생성 시, 로그 남김 (1회)
// -> 인스턴스 생성 시, 로그 남김 (N회)

console.log('======================================================');

// [2] Method Decorator
function autobind(
  target: (...argv: any[]) => any,
  ctx: ClassMethodDecoratorContext,
) {
  ctx.addInitializer(function (this: any) {
    this[ctx.name] = this[ctx.name].bind(this); // 함수 반환
  });

  return function (this: any) {
    console.log('Executing original function');

    // target은 원본 메서드 (실행 시점 차이)
    target.apply(this); // 즉시 실행 (this 문제 해결)
  };
}

@logger
class Person2 {
  name = 'Kim';

  // 오류 해결 (this 바인딩 문제)
  // constructor() {
  //   this.greet = this.greet.bind(this);
  // }

  @autobind
  greet() {
    console.log('Hi, I am ' + this.name);
  }
}

const kim2 = new Person2();
const julie2 = new Person2();

const greet = kim2.greet;
greet();
// C:\Users\-\repositories\TypeScript_Study\udemy\01-understanding-typescript\section-11\decorators.js:104
//             console.log('Hi, I am ' + this.name);
//                                            ^

// TypeError: Cannot read properties of undefined (reading 'name')
//     at greet (C:\Users\-\repositories\TypeScript_Study\udemy\01-understanding-typescript\section-11\decorators.js:104:44)
//     at Object.<anonymous> (C:\Users\-\repositories\TypeScript_Study\udemy\01-understanding-typescript\section-11\decorators.js:112:1)
//     at Module._compile (node:internal/modules/cjs/loader:1730:14)
//     at Object..js (node:internal/modules/cjs/loader:1895:10)
//     at Module.load (node:internal/modules/cjs/loader:1465:32)
//     at Function._load (node:internal/modules/cjs/loader:1282:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)
//     at node:internal/main/run_main_module:36:49

// Node.js v22.15.0

console.log('======================================================');

// [3] Field Decorator
function fieldLogger(target: undefined, ctx: ClassFieldDecoratorContext) {
  console.log(target); // 항상 undefined
  console.log(ctx);

  return (initialValue: any) => {
    console.log(initialValue);

    return '';
  };
}

@logger
class Person3 {
  @fieldLogger
  name = 'Kim';

  @autobind
  greet() {
    console.log('Hi, I am ' + this.name);
  }
}

const kim3 = new Person3();
const greet2 = kim3.greet;
greet2();

console.log('======================================================');

// [4] Decorator Factories
function replacer<T>(initValue: T) {
  return function replacerDecorator(
    target: undefined,
    ctx: ClassFieldDecoratorContext,
  ) {
    console.log(target);
    console.log(ctx);

    return (initialValue: any) => {
      console.log(initialValue);

      return initValue;
    };
  };
}

@logger
class Person4 {
  @replacer('Max')
  name = 'Kim';

  @autobind
  greet() {
    console.log('Hi, I am ' + this.name);
  }
}

const kim4 = new Person4();
const greet4 = kim4.greet;
greet4();
