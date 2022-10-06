/**
 * 
 * @param {string} email The user mail 
 * @param {string} password The user password
 * @returns user | Error
 */

function authenticateUser(email, password){
   for (var i = 0; i < users.length; i++){
      var user = users[i]

      if (user.email === email) {
         if (user.password === password)
            return user
         else
            return new Error('wrong password')
      }
   }
   return new Error('user not registered')
}