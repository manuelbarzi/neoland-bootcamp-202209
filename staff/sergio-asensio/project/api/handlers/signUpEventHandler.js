// const signUpEvent = require('../logic/signUpEvent')

// module.exports = (req, res) => {
//     try {
//         const {  params:  { eventId }, userId } = req
        
//         signUpEvent(userId, eventId)
//             .then(() => res.status(204).send())
//             .catch(error => res.status(500).json({ error: error.message }))
//     } catch (error) {
//         res.status(500).json({ error: error.message })
//     }
// }