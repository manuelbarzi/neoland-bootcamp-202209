import axios from 'axios'

async function validateUser(email, password) {
    if (typeof email!== 'string') throw new TypeError('email is not a string')

    const response = await axios.post('http://localhost/users/validate', { email, password })
    return response.data

}

export default validateUser
