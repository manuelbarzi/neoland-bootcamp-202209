const { Schema } = require('mongoose')

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

