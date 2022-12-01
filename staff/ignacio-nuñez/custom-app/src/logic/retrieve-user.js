function retrieveUser(token) {
    if (typeof token !== 'string') throw new Error('token is not a string')
    if(!token.length) throw new Error('token is empty')

    return fetch(`http://localhost:80/user/retrieve`, {
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

            return user
        })
}

export default retrieveUser