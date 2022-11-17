const retrievePosts = require("../logic/retrievePosts")

module.exports = (req, res) => {
    try {
        retrievePosts((error, posts) => {
            if (error) {
                res.status(500)
                res.json({ error: error.message })

                return
            }

            res.json(posts)
        })
    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}