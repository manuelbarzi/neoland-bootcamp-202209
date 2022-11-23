function retrieveSearchedUser(userId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if(!userId.length) throw new Error('userId is empty')

    return fetch(`http://localhost:80/search/users/${userId}`, {
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
        .then(data => {
            const user = data

            return user.name
        })
}

export default retrieveSearchedUser