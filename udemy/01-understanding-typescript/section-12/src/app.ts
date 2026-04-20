// Class Decorator
function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}

@Logger
class Person {
  name = 'Kim';

  constructor() {
    console.log('Creating person object...');
  }
}

const person = new Person();

console.log(person);

// Decorator Factories
function Logger2(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger2('LOGGING - PERSON')
class Person2 {
  name = 'Kim';

  constructor() {
    console.log('Creating person object...');
  }
}

const person2 = new Person2();

console.log(person2);

// More useful Decorators
function withTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor(); // 인스턴스 생성

    if (hookEl) {
      hookEl.innerHTML = template; // HTML 요소 삽입
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  };
}

@withTemplate('<h1>My Person Object</h1>', 'app')
class Person3 {
  name = 'Kim';

  constructor() {
    console.log('Creating person object...');
  }
}

const person3 = new Person3();

console.log(person3);

// Adding Multiple Decorators
function withTemplate2(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY');

  return function (constructor: any) {
    console.log('Rendering template');

    const hookEl = document.getElementById(hookId);
    const p = new constructor(); // 인스턴스 생성

    if (hookEl) {
      hookEl.innerHTML = template; // HTML 요소 삽입
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  };
}

function Logger3(logString: string) {
  console.log('LOGGER FACTORY');

  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger3('LOGGING')
@withTemplate2('<h1>My Person Object</h1>', 'app')
class Person4 {
  name = 'Kim';

  constructor() {
    console.log('Creating person object...');
  }
}

const person4 = new Person4();

console.log(person4);

// Property Decorators
function Log(target: any, propertyName: string | symbol) {
  console.log('Property Decorator');
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;
  private _price: number;

  // setter
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }

  // constructor
  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}

// Accessor & Method & Parameter Decorators
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor Decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor,
) {
  console.log('Method Decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter Decorator');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product2 {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }

  // constructor
  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

// When Do Decorators Execute?
const p1 = new Product2('Book', 19);
const p2 = new Product2('Book 2', 29);

// Returning (and changing) a Class in a Class Decorator
function withTemplate3(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY');

  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T,
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();

        console.log('Rendering template');

        const hookEl = document.getElementById(hookId);

        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    };
  };
}

@withTemplate3('<h1>My Person Object</h1>', 'app')
class Person5 {
  name = 'Kim';

  constructor() {
    console.log('Creating person object...');
  }
}

// Example : Creating an "Autobind" Decorator
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);

      return boundFn;
    },
  };

  return adjDescriptor;
}

class Printer {
  message = 'This works!';

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector('button');
// button?.addEventListener('click', p.showMessage); // undefined
// button?.addEventListener('click', p.showMessage.bind(p));  // works!
button?.addEventListener('click', p.showMessage); // AutoBind Decorator 적용 후

// Validation with Decorators
interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      'required',
    ],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      'positive',
    ],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];

  if (!objValidatorConfig) {
    return true;
  }

  let isValid = true;

  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }

  return isValid;
}

class Course {
  @Required
  title: string;

  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector('form');
courseForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const titleEl = document.getElementById('title') as HTMLInputElement;
  const priceEl = document.getElementById('price') as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert('Invalid input, please try again!');
    return;
  }

  console.log(createdCourse);
});
