import axios from 'axios';

async function getPorts() {

    const response = await axios.get('http://localhost:8080/ports')
    return response.data

}

export default getPorts