import axios from 'axios';

async function authenticateUser(email, password) {
    if (typeof email !== 'string') throw new TypeError('email is not a string')


    const response = await axios.post('http://localhost:8080/auth', { email, password })
    return response.data

}

export default authenticateUser