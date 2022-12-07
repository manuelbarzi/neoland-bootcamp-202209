const { Schema } = require('mongoose')

module.exports = new Schema({
    user: {
        type: ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})