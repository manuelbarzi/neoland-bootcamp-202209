import axios from "axios";

async function registerUser(registrationData) {

    const response = await axios.post('http://localhost:8080/register', registrationData)
    return response.data


}

export default registerUser