const updateNotice = require('../logic/updateNotice')

module.exports = (req, res) => {
    try {
        const { body: { title, body }, params:   { noticeId }, userId } = req
        
        updateNotice(userId, noticeId, title, body )
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}