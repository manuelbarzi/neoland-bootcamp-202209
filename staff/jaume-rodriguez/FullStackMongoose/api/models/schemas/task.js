const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

module.exports = new Schema({
    user: {
        type: ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: false
    },
    text: {
        type: String,
        required: false
    },
    status: {
        type: String,
        enum: ['todo', 'doing', 'done'],
        required: true
    },
})