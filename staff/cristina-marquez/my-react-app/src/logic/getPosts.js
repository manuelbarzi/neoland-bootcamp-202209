import axios from 'axios';

async function getPosts() {

    const response = await axios.get('http://localhost:8080/posts')
    console.log('Returning:', response.data)
    return response.data

}

export default getPosts