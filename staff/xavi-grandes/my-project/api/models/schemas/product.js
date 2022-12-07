const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

module.exports = new Schema({
    user: {
        type: ObjectId,
        required: true
        // - user (ObjectId, required, user id)
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
})

