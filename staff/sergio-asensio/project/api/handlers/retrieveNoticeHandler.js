const retrieveNotice = require('../logic/retrieveNotice')

module.exports = (req, res) => {
    try {
        const { params: {noticeId}, userId } = req
    
        retrieveNotice(userId, noticeId)
            .then(notice => res.json(notice))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}