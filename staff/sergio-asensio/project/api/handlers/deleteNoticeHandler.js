const deleteNotice= require('../logic/deleteNotice')

module.exports = (req, res) => {
    try {
        const { params: { noticeId: noticeId }, userId } = req

        deleteNotice(userId, noticeId)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}