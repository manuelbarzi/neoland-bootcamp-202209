function retrieveUser(userId) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')

    return fetch(`http://localhost:80/user/retrieve`, {
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

            return user
        })
}

export default retrieveUser