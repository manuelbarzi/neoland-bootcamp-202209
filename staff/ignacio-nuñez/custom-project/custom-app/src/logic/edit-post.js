function editPost(text, visibility, postId, userId) {
    if (typeof text !== 'string') throw new Error('invalid text')
    if(!text.length) throw new Error('text is empty')
    if (typeof postId !== 'string') throw new Error('postId is not a string')
    if(postId.length === 0) throw new Error('invalid user id')

    const post = { text, visibility }

    return fetch(`http://localhost:80/posts/${postId}`, {
        method: 'PATCH',
        body: JSON.stringify(post),
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

export default editPost