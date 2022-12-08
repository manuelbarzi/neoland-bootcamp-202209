const { Schema } = require('mongoose')
const { ObjectId } = require('mongodb')

module.exports = new Schema({
    players: {
        type: [ObjectId],
        ref: 'User'
    },
    turn: {
        type: Number,
        default: 0
    },
    hasTurn: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        required: true,
        enum: ["creating", "playing", "finished"],
        default: "creating"
    },
    aliensPlayerOne: {
        type: Array,
    },
    aliensPlayerTwo: {
        type: Array,
    },
    alienAttacks: {
        type: Array,
        ref: 'alienAttack'
    }
})