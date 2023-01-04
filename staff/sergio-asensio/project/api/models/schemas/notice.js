const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

module.exports = new Schema({
    user: {
        type: ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    }
})