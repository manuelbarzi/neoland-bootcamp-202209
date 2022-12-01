function retrieveSearchedUser(targetUserId, token) {
    if (typeof targetUserId !== 'string') throw new TypeError('targetUserId is not a string')
    if(!targetUserId.length) throw new Error('targetUserId is empty')
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if(!token.length) throw new Error('token is empty')

    return fetch(`http://localhost:80/search/users/${targetUserId}`, {
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
        .then(data => {
            const user = data

            return user.name
        })
}

export default retrieveSearchedUser