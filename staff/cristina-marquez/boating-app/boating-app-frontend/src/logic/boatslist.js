import axios from 'axios';

async function getUserBoats() {

    const response = await axios.get('http://localhost:8080/boats')
    return response.data

}

export default getUserBoats