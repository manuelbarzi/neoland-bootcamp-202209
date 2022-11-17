function retrieveUser(userId) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')


    return fetch('http://localhost:80/user', {
        method: 'POST',
        body: JSON.stringify({ userId }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed on fetching authentication')
            }

            return res.json()
        })
        .then(data => {
            const { name, email } = data
            
            const user = { name, email }

            return user
        })
}

export default retrieveUser