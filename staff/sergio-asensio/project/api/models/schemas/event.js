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
    requirement: {
        type: String,
        required: true
    },
    capacity: {
        type: Number ,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    inscription: {
        type: String,
        required: true,
        enum:['close', 'open'],
        default: 'close'
    },
    image: {
        type: String,
    },
    participants: {
        type: [ObjectId]
    }
})
