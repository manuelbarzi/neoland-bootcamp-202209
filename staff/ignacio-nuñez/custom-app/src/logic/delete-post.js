function deletePost(postId, postUserId, userId) {
    if (typeof postId !== 'string') throw new Error('postId is not a string')
    if(postUserId !== userId) throw new Error('userId is different than postUserId')

    return fetch('http://localhost:80/post/delete', {
        method: 'POST',
        body: JSON.stringify({ postId }),
        headers: { 
            'Authorization': `Bearer ${userId}`,
            'Content-Type': 'application/json'
         }
    })
        .then(res => {
            if(res.status === 500) throw new Error('Server internal error')

            else if (res.status === 404) throw new Error('post doesnt found')
        })
}

export default deletePost