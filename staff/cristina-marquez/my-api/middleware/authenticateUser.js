module.exports = (req, res, next) => {
    try {
        // Get user's token
        // const userToken = req.headers['Authorization']
        // const user = checkUserTokenInDB(userToken)

        const userId = 1

        // Set user in request context
        req.user = {
            id: userId
        }

        return next();
    } catch (error) {
        res.status(401).send({ error: 'Not authenticated' })
    }
}