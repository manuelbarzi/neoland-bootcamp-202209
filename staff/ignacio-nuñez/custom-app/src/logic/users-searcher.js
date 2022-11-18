function catSearcher(query) {
    if (typeof query !== 'string') throw new Error('query is not a string')

    return fetch(`http://localhost:80/search?q=${query}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed on fetching authentication')
            }

            return res.json()
        })
        .then(cats => {
            return cats
        })
}

export default catSearcher