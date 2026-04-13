// interface (인터페이스)
interface Authenticatable {
  email: string;
  password: string;
  login(): void;
  logout(): void;
}

let user: Authenticatable;

user = {
  email: 'test@example.com',
  password: 'abc1',
  login() {
    // reach out to a database, check credentials, create a session
  },
  logout() {
    // clear the session
  },
  role: '',
};

// Interfaces vs. Type Aliases
// 동일한 이름으로 interface를 선언할 경우, 기존의 인터페이스에 자동으로 추가된다.
interface Authenticatable {
  role: string;
}

// type으로 선언할 경우, 불가하다.
type Authenticatable2 = {
  email: string;
  password: string;
  login(): void;
  logout(): void;
};

// error
// type Authenticatable2 = {
//   role: string;
// };

// Implementing Interfaces
class AuthenticatableUser implements Authenticatable {
  constructor(
    public email: string,
    public password: string,
    public role: string,
    public userName: string,
  ) {}

  login() {
    // ...
  }

  logout() {
    // ...
  }
}

// Ensuring Base Types with Interfaces
function authenticate(user: Authenticatable) {
  user.login();
}

// Extending Interfaces
interface AuthenticatableAdmin extends Authenticatable {
  role: 'admin' | 'superadmin';
}
