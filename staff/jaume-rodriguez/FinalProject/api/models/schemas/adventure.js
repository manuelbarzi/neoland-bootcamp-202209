const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

module.exports = new Schema({
    creator: {
        type: ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    isMainAdventure: {
        type: String,
        default: 'main',
        required: true
    },
    steps: [{
        type: ObjectId,
        ref: 'Quest'
    }],
    votes: [{
        type: ObjectId,
        ref: 'User'
    }]
})