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
    uniquePlayersPlaying: {
        type: Number,
        default: 0,
        required: true
    },
    goldCollected: {
        type: Number,
        default: 0,
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