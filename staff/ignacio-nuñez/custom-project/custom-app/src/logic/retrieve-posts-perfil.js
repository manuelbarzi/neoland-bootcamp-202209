function retrievePostsPerfil(token, page, limit) {
    return fetch(`http://localhost:80/posts/perfil?page=${page}&limit=${limit}`, {
        method: 'GET',
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
        .then(posts => {
            return posts
        })
}

export default retrievePostsPerfil