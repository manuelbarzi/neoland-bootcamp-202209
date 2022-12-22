const createNews = require('../logic/createNews')

module.exports = async (req, res) => {
    try {
        const { body: { title, text, topic, visibility }, userId } = req

        await createNews(userId, title, text, topic, visibility)
            .then(() => res.status(201).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}