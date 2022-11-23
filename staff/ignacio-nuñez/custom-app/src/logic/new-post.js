function newPost(content, userId, userName, visibility) {
    if (typeof content !== 'string') throw new Error('invalid content')
    if (typeof userId !== 'string') throw new Error('invalid userId')
    if (typeof userName !== 'string') throw new Error('invalid userName')
    if (typeof visibility !== 'string') throw new Error('invalid visibility')
    if (visibility !== 'private' && visibility !== 'public') throw new Error('invalid visibility')

    const post = { content, userName, visibility }

    return fetch('http://localhost:80/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Authorization': `Bearer ${userId}`,
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (!res.ok) throw new Error('server error')
    })
}

export default newPost