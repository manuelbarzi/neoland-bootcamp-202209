/**
 * Register users in DB
 * 
 * @param {string} name The user name.
 * @param {string} email The user email.
 * @param {string} password The user password.
 * 
 * @returns 
 */


function registUser(name, email, password) {
  for (let i = 0; i < users.length; i++) {
        var user = users[i];

    if (user.email === email)
        return new Error('The user exist')
  }

  var user = {
    name: name,
    email: email,
    password: password
  }

  users.push(user)

  return null 

}