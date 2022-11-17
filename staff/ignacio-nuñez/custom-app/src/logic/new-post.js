function newPost(content, userId, userName) {
    if (typeof content !== 'string') throw new Error('invalid content')
    if (typeof userId !== 'string') throw new Error('invalid userId')
    if (typeof userName !== 'string') throw new Error('invalid userName')


    const post = { content, userId, userName }


   return fetch('http://localhost:80/newPost', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: { 'Content-Type': 'application/json' }
    }).then(res => {
        if (!res.ok) throw new Error('server error')
    })
}

export default newPost