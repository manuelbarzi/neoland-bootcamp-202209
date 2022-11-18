function retrievePosts(userId) {
    return fetch('http://localhost:80/post/retrieve', {
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
        .then(posts => {
            return posts
        })
}

export default retrievePosts