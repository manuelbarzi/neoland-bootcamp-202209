import axios from "axios";

async function updatePost(postId, text, visibility) {
    if (typeof text !== 'string') throw new TypeError('text is not a string')
    if (!text.length) throw new Error('text is empty')
    if (typeof visibility !== 'string') throw new TypeError('visibility is not a string')
    if (!visibility.length) throw new Error('visibility is empty')
    if (visibility !== 'public' && visibility !== 'private') throw new Error('invalid visibility')


    const response = await axios.patch(`http://localhost:8080/posts/${postId}`, { text, visibility })
    return response.data

}

export default updatePost