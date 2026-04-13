'use strict';
let user;
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
// error
// type Authenticatable2 = {
//   role: string;
// };
// Implementing Interfaces
class AuthenticatableUser {
  email;
  password;
  role;
  userName;
  constructor(email, password, role, userName) {
    this.email = email;
    this.password = password;
    this.role = role;
    this.userName = userName;
  }
  login() {
    // ...
  }
  logout() {
    // ...
  }
}
// Ensuring Base Types with Interfaces
function authenticate(user) {
  user.login();
}
