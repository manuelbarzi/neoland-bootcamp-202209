const retrieveUser = require('../logic/retrieveUser')

module.exports = (req, res) => {
    const { headers: { authorization} } = req

    const userId = authorization.substring(7)
    // llamo a la logica y le paso el userId, lo acabo de recuperar en la logica 
    try {// hago manejo de errors, y si no los hay devuelvo el usuario
        retrieveUser(userId, (error, user) => {
            if (error) {
                res.status(500).json({error: error.message})
                
                return
            }
       // si va bien devuelvo el usuario(status 200)
            res.json(user)
        })
    } catch (error) {
        res.status(500).json({error: error.message})
       
    }
}