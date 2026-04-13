"use strict";
// Class
// 클래스 정의 방법 1
class User1 {
    name;
    age;
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
}
// 클래스 정의 방법 2
// - public/private 키워드를 붙이면, 더 단축 시킬 수 있다.
// - optional 파라미터 설정이 가능하다.
// - 파라미터 기본값을 줄 수 있다.
class User2 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
}
// 접근 제어(Access Control)
class User3 {
    name;
    age;
    bloodType;
    hobbies = []; // 기본값: public
    favorites = [];
    constructor(name, // public
    age, // private (클래스 내부에서만 접근 가능)
    bloodType) {
        this.name = name;
        this.age = age;
        this.bloodType = bloodType;
    }
    greet() {
        console.log('My age: ' + this.age);
    }
}
const kim = new User2('Kim', 30);
const fred = new User1('Fred', 29);
console.log(kim, fred);
const max = new User3('Max', 38, 'A');
max.name = 'Maxi';
// max.age = 37; // error (private, 외부에서 접근 불가능)
// max.bloodType = 'B'; // error (protected, 상속 클래스에서만 접근 가능)
// readonly
class User4 {
    name;
    age;
    hobbies = [];
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
}
const max4 = new User4('Max', 36);
// max4.hobbies = []; // error (readonly, 재할당 불가)
max4.hobbies.push('Soccer'); // ok
