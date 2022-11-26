module.exports = (req, res, next) => {
    try {
        // Get user's token
        // const userToken = req.headers['Authorization']
        // const user = checkUserTokenInDB(userToken)

        const userId = '6380e27c0a0bf82556418fcd'

        // Set user in request context
        req.user = {
            id: userId
        }

        return next();
    } catch (error) {
        res.status(401).send({ error: 'Not authenticated' })
    }
}