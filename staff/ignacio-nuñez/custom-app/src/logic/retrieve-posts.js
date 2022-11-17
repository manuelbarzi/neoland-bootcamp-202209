function retrievePosts() {
    return fetch('http://localhost:80/posts', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
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