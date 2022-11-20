function usersSearcher(query, userId) {
    if (typeof query !== 'string') throw new Error('query is not a string')
    if (query.trim() === '') throw new Error('invalid query')


    return fetch(`http://localhost:80/search/users?q=${query}`, {
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
        .then(users => {
            return users
        })
}

export default usersSearcher