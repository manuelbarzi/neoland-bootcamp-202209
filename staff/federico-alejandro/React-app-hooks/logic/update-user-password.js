/**
 * 
 * @param {string} Password The old user password 
 * @param {string} newPassword The old user password
 * @returns 
 */
 function updateUserPassword(Password, newPassword) {
    if (typeof newPassword !== "string") throw new Error("password is not a string");
    if (newPassword.length < 8) throw new Error("password length is less than 8");
    if (HAS_SPACES_REGEX.test(newPassword)) throw new Error("password has spaces");

    if(Password === newPassword){
        throw new Error('Your new password cannot be the same as your current password')

        
    
    }
    
    //throw new Error('user not found')
}