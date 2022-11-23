function retrieveUserPost(postId, postUserId, userId) {
    if (typeof postId !== 'string') throw new TypeError('postId is not a string')
    if(!postId.length) throw new Error('postId is empty')
    if(typeof userId !== 'string') throw new TypeError('invalid userId')
    if(!userId.length) throw new Error('userId is empty')
    if(postUserId !== userId) throw new Error(`the post with id ${postId} doesnt belong to user ${userId}`)

    return fetch(`http://localhost:80/user/posts/${postId}`, {
        method: 'GET',
        headers: { 
            'Authorization': `Bearer ${userId}`,
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