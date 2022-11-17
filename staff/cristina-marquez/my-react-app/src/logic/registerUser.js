import axios from "axios";

async function registerUser(name, email, password) {

    if (typeof name !== 'string') throw new Error('name is not a string')


    if (typeof email !== 'string') throw new Error('email is not a string')

    if (typeof password !== 'string') throw new Error('password is not a string')
    if (password.length < 6) throw new Error('password length is less than 6')

    const response = await axios.post('http://localhost:8080/register', { name, email, password })
    return response.data


}

export default registerUser