"use strict";
// Getters
class User5 {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // getter
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
const max5 = new User5('Max', 'Kim');
console.log(max5.fullName); // 변수처럼 접근
// Setters
class User6 {
    _firstName = '';
    _lastName = '';
    // setter
    // ! setter는 반드시 하나의 매개변수만 가져야 한다.
    set firstName(name) {
        if (name.trim() === '') {
            throw new Error('Invalid name.');
        }
        this._firstName = name;
    }
    set lastName(name) {
        if (name.trim() === '') {
            throw new Error('Invalid name.');
        }
        this._lastName = name;
    }
    // getter
    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }
}
const max6 = new User6();
max6.firstName = 'Max';
max6.lastName = '';
console.log(max6.fullName);
// Static Properties & Methods
class User7 {
    // static
    static eid = 'USER';
    static greet() {
        console.log('Hello!');
    }
}
console.log(User7.eid); // new 키워드로 인스턴스 생성 없이도 접근 가능
User7.greet(); // 'Hello!'
// Inheritance (상속)
class User8 {
    _firstName = '';
    _lastName = '';
    // setter
    // ! setter는 반드시 하나의 매개변수만 가져야 한다.
    set firstName(name) {
        if (name.trim() === '') {
            throw new Error('Invalid name.');
        }
        this._firstName = name;
    }
    set lastName(name) {
        if (name.trim() === '') {
            throw new Error('Invalid name.');
        }
        this._lastName = name;
    }
    // getter
    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }
}
class Employee extends User8 {
    jobTitle;
    constructor(jobTitle) {
        super();
        this.jobTitle = jobTitle;
        // super.firstName = 'Max';
    }
    work() {
        // ...
        console.log(this._firstName); // protected, 상속 받은 클래스에서만 사용 가능
    }
}
const max8 = new User8();
// max._firstName = 'Max 2';  // error
// Abstract Classes
class UIElement {
    identifier;
    constructor(identifier) {
        this.identifier = identifier;
    }
    clone(targetLocation) {
        // logic to duplicate the UI element
    }
}
// let uiElement = new UIElement();  // error (abstract로 선언된 base 클래스로 인스턴스 생성 불가)
class SideDrawerElement extends UIElement {
    identifier;
    position;
    constructor(identifier, position) {
        super(identifier);
        this.identifier = identifier;
        this.position = position;
    }
}
