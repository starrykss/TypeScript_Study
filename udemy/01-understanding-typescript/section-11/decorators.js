"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
// [1] Class Decorator
function logger(target, ctx) {
    console.log('logger decorator');
    console.log(target);
    console.log(ctx);
    return class extends target {
        // 생성자 생성
        constructor(...args) {
            super(...args);
            console.log('class constructor');
            console.log(this);
        }
        age = 35;
    };
}
let Person = (() => {
    let _classDecorators = [logger];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var Person = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            Person = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        name = 'Kim';
        greet() {
            console.log('Hi, I am ' + this.name);
        }
    };
    return Person = _classThis;
})();
const kim = new Person();
kim.greet(); // 기존 메서드 그대로 사용 가능
console.log(kim); // Person { name: 'Kim', age: 35 }
const julie = new Person();
// -> 클래스 생성 시, 로그 남김 (1회)
// -> 인스턴스 생성 시, 로그 남김 (N회)
console.log('======================================================');
// [2] Method Decorator
function autobind(target, ctx) {
    ctx.addInitializer(function () {
        this[ctx.name] = this[ctx.name].bind(this); // 함수 반환
    });
    return function () {
        console.log('Executing original function');
        // target은 원본 메서드 (실행 시점 차이)
        target.apply(this); // 즉시 실행 (this 문제 해결)
    };
}
let Person2 = (() => {
    let _classDecorators = [logger];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _greet_decorators;
    var Person2 = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _greet_decorators = [autobind];
            __esDecorate(this, null, _greet_decorators, { kind: "method", name: "greet", static: false, private: false, access: { has: obj => "greet" in obj, get: obj => obj.greet }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            Person2 = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        name = (__runInitializers(this, _instanceExtraInitializers), 'Kim');
        // 오류 해결 (this 바인딩 문제)
        // constructor() {
        //   this.greet = this.greet.bind(this);
        // }
        greet() {
            console.log('Hi, I am ' + this.name);
        }
    };
    return Person2 = _classThis;
})();
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
function fieldLogger(target, ctx) {
    console.log(target); // 항상 undefined
    console.log(ctx);
    return (initialValue) => {
        console.log(initialValue);
        return '';
    };
}
let Person3 = (() => {
    let _classDecorators = [logger];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _name_decorators;
    let _name_initializers = [];
    let _name_extraInitializers = [];
    let _greet_decorators;
    var Person3 = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [fieldLogger];
            _greet_decorators = [autobind];
            __esDecorate(this, null, _greet_decorators, { kind: "method", name: "greet", static: false, private: false, access: { has: obj => "greet" in obj, get: obj => obj.greet }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            Person3 = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        name = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _name_initializers, 'Kim'));
        greet() {
            console.log('Hi, I am ' + this.name);
        }
        constructor() {
            __runInitializers(this, _name_extraInitializers);
        }
    };
    return Person3 = _classThis;
})();
const kim3 = new Person3();
const greet2 = kim3.greet;
greet2();
console.log('======================================================');
// [4] Decorator Factories
function replacer(initValue) {
    return function replacerDecorator(target, ctx) {
        console.log(target);
        console.log(ctx);
        return (initialValue) => {
            console.log(initialValue);
            return initValue;
        };
    };
}
let Person4 = (() => {
    let _classDecorators = [logger];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _name_decorators;
    let _name_initializers = [];
    let _name_extraInitializers = [];
    let _greet_decorators;
    var Person4 = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [replacer('Max')];
            _greet_decorators = [autobind];
            __esDecorate(this, null, _greet_decorators, { kind: "method", name: "greet", static: false, private: false, access: { has: obj => "greet" in obj, get: obj => obj.greet }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            Person4 = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        name = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _name_initializers, 'Kim'));
        greet() {
            console.log('Hi, I am ' + this.name);
        }
        constructor() {
            __runInitializers(this, _name_extraInitializers);
        }
    };
    return Person4 = _classThis;
})();
const kim4 = new Person4();
const greet4 = kim4.greet;
greet4();
