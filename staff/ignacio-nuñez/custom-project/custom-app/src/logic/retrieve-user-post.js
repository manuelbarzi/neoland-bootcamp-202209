import extractSubFromToken from '../utils/extractSubFromToken'

function retrieveUserPost(postId, postUserId, token) {
    if (typeof postId !== 'string') throw new TypeError('postId is not a string')
    if(!postId.length) throw new Error('postId is empty')
    if(typeof token !== 'string') throw new TypeError('invalid token')
    if(!token.length) throw new Error('userId is empty')

    const userId = extractSubFromToken(token)

    if(postUserId !== userId) throw new Error(`the post with id ${postId} doesnt belong to user ${userId}`)

    return fetch(`http://localhost:80/user/posts/${postId}`, {
        method: 'GET',
        headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json' 
        }
    })
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed on fetching authentication')
            }

            return res.json()
        })
        .then(post => {
            return post
        })
}

export default retrieveUserPost