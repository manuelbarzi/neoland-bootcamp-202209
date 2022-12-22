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
    text: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        enum: ['vandalismo', 'medio-ambiente', 'sanidad', 'transporte', 'energia', 'observaciones', 'cultura'],
        default: 'public',
        required: true
    },
    visibility: {
        type: String,
        enum: ['public', 'private'],
        default: 'public',
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})