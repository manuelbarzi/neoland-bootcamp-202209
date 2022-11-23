const postsSearchedUserRetrieve = require('../logic/postsSearchedUserRetrieve')

module.exports = (req, res) => {
    const { headers: { authorization }, params: { searchedUserId } } = req

    const userId = authorization.substring(7)

    try {
        postsSearchedUserRetrieve(userId, searchedUserId, (error, posts) => {
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