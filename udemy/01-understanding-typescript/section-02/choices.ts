// [1] enum (열거형)
enum Role {
  Admin, // 0
  Editor, // 1
  Guest, // 2
}

let userRole: Role = 0; // 0, 1, 2

// ...

userRole = Role.Guest;

// Literal Types
let userRole2: 'admin' | 'editor' | 'guest' = 'admin';

// ...

userRole2 = 'guest';

let possibleResults2: [1 | -1, 1 | -1]; // [1, -1]
possibleResults2 = [1, -1];

// Type Aliases & Custom Types
// type MyNumber = number;
type Roles = 'admin' | 'editor' | 'guest' | 'reader';
type User = {
  name: string;
  age: number;
  role: Role;
  permissions: string[];
};

function access(role: Roles) {}
