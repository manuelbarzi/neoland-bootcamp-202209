function retrieveSearchedUserPosts(userId, searchedUserId, page, limit = 6) {
    if(typeof userId !== 'string') throw new TypeError('invalid user id')
    if(typeof searchedUserId !== 'string') throw new TypeError('invalid searched user id')
    if(typeof page !== 'number') throw new TypeError('page is not a number')
    if(typeof limit !== 'number') throw new TypeError('limit is not a number')

    
    return fetch(`http://localhost:80/search/posts/${searchedUserId}?page=${page}&limit=${limit}`, {
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