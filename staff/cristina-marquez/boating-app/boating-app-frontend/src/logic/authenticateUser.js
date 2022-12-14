import axios from 'axios';

async function authenticateUser(authenticationData) {

    const response = await axios.post('http://localhost:8080/auth', authenticationData)
    return response.data

}

export default authenticateUser