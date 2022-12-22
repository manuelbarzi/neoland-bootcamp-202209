const createItem = require ('../logic/createItem')

const { errors: { ConflictError } } = require('../../com')

module.exports = (req, res) => {
    try {
        const { body: { title }, params: { listId } } = req

        createItem(listId, title)
            .then(() => res.status(201).send())
            .catch(error => {
                if (error instanceof ConflictError)
                    res.status(409).json({ error: error.message })
                else
                    res.status(500).json({ error: error.message })
            })

    } catch(error){
        res.status(500).json({ error: error.message })
    }
}