import axios from "axios";


async function createNewPost(userId, text, visibility) {

    if (typeof text !== 'string') throw new TypeError('text is not a string')
    if (!text.length) throw new Error('text is empty')
    if (typeof visibility !== 'string') throw new TypeError('visibility is not a string')
    if (!visibility.length) throw new Error('visibility is empty')

    if (visibility !== 'public' && visibility !== 'private') throw new Error('invalid visibility')

    console.log('sending')

    const response = await axios.post('http://localhost:8080/posts', { userId, text, visibility })

    return response.data

}

export default createNewPost