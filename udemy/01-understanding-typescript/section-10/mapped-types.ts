// [1] Introducing Mapped Types

type Operations = {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
};

type Results<T> = {
  [Key in keyof T]?: number;
};

let mathOperations: Operations = {
  add(a: number, b: number) {
    return a + b;
  },

  subtract(a: number, b: number) {
    return a - b;
  },
};

let mathResults: Results<Operations> = {
  add: mathOperations.add(1, 2),
  subtract: mathOperations.subtract(5, 2),
};

// [2] Readonly Types & Optional Mapping
type Operations2 = {
  add?: (a: number, b: number) => number;
  subtract?: (a: number, b: number) => number;
  readonly times?: (a: number, b: number) => number;
};

type Results2<T> = {
  [Key in keyof T]-?: number; // optional 속성 제거 (-?)
};

let mathResults2: Results2<Operations> = {
  add: mathOperations.add(1, 2),
  subtract: mathOperations.subtract(5, 2),
};

// mathResults2.times = 10; // error (readonly)

type Operations3 = {
  readonly add?: (a: number, b: number) => number;
  readonly subtract?: (a: number, b: number) => number;
};

type Results3<T> = {
  -readonly [Key in keyof T]?: number; // readonly 속성 제거 (-readonly)
};

let mathResults3: Results3<Operations> = {
  add: mathOperations.add(1, 2),
  subtract: mathOperations.subtract(5, 2),
};

mathResults.add = 4; // ok
