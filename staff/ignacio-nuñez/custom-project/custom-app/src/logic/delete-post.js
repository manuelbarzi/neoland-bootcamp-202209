import extractSubFromToken from '../utils/extractSubFromToken'

function deletePost(postId, postUserId, token) {
    if(!token.length) throw new Error('token is empty')
    if(typeof token !== 'string') throw new TypeError('token is not a string')

    const userId = extractSubFromToken(token)

    if (typeof postId !== 'string') throw new Error('postId is not a string')
    if(postUserId !== userId) throw new Error('userId is different than postUserId')

    return fetch(`http://localhost:80/posts/${postId}`, {
        method: 'DELETE',
        headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
         }
    })
        .then(res => {
            if(res.status === 500) throw new Error('Server internal error')

            else if (res.status === 404) throw new Error('post doesnt found')
        })
}

export default deletePost