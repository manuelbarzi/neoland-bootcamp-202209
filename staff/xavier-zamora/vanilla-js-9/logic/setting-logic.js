//THIS FUNCTION UPDATE USER
function updateUserEmail(currentemail, newEmail) {
    if (!IS_EMAIL_REGEX.test(newEmail.value)) return Error('email is not valid') 

        var i = users.length;
        while (i > 0) {
            i--
            var user = users[i]

            if (currentemail === newEmail) {
                return new Error('user whit email ' + newEmail + ' already exists');
            }
        }
        var indexJ = users.length
        while (indexJ > 0) {
            indexJ--
            var user = users[indexJ]

            if (user.email === currentemail) {
                user.email = newEmail
                userName.innerHTML = newEmail
                userNameLogin = newEmail

                return null
            }
         }
}


