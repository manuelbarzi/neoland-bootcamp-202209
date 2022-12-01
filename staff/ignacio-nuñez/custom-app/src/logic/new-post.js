function newPost(userId, text, visibility) {
    if (typeof text !== 'string') throw new Error('invalid text')
    if(!text.length) throw new Error('text is empty')
    if (typeof userId !== 'string') throw new Error('invalid userId')
    if (typeof visibility !== 'string') throw new Error('invalid visibility')
    if (visibility !== 'private' && visibility !== 'public') throw new Error('invalid visibility')

    const post = { text, visibility }

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