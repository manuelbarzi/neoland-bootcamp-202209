function retrievePosts(token, page, limit= 6) {
    if(typeof page !== 'number') throw new Error('page is not a number')
    if(typeof token !== 'string') throw new TypeError('token is not a string')
    if(!token.length) throw new Error('token is empty')

    return fetch(`http://localhost:80/posts?page=${page}&limit=${limit}`, {
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
        .then(posts => {
            return posts
        })
}

export default retrievePosts