const createProduct = require ('../logic/createProduct')

module.exports = (req, res) => {
    try {
        const { body: { title }, params: { listId } } = req

        createProduct(listId, title)
            .then(() => res.status(201).send())
            .catch(error => res.status(500).json({ error: error.message }))
            // TODO: ampliar errores

    } catch(error){
        res.status(500).json({ error: error.message })
    }
}