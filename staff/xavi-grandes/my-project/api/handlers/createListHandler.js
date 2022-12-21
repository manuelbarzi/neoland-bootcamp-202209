const createList = require ('../logic/createlist')

module.exports = (req, res) => {
    try {
        const { body: { title }, userId } = req

        createList(userId, title)
            .then(() => res.status(201).send())
            .catch(error => res.status(500).json({ error: error.message }))

    } catch(error){
        res.status(500).json({ error: error.message })
    }
}