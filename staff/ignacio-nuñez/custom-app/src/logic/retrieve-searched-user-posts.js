function retrieveSearchedUserPosts(userId, searchedUserId) {
    if(typeof userId !== 'string') throw new TypeError('invalid user id')
    if(typeof searchedUserId !== 'string') throw new TypeError('invalid searched user id')
    
    return fetch(`http://localhost:80/search/posts/${searchedUserId}`, {
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

export default retrieveSearchedUserPosts