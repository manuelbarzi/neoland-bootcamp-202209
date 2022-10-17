/**
 *Authenticate a user.
 *
 * @param {string} email The user Email
 * @param {string} password The user password
 *
 * @returns user | Error
 */

function authenticateUser(email, password) {
  for (var i = 0; i < users.length; i++) {
    var user = users[i];

    if (user.email === email) {
      if (user.password === password) {
        return user;
      } else {
        return new Error("Wrong credentials");
      }
    }
  }
  return new Error("Wrong credentials");
}
