const { Schema } = require('mongoose')
const { ObjectId } = require('mongodb')
const { Alien } = require('..')

module.exports = new Schema({
    mode: {
        type: String,
        required: true,
        enum: ["normal"]
    },
    players: {
        type: [ObjectId],
        ref: 'User'
    },
    roomId: {
        type: Number,
        required: true,
        unique: true
    },
    aliensPlayerOne: {
        type: Array,
    },
    aliensPlayerTwo: {
        type: Array,
    },
    status: {
        type: String,
        required: true,
        enum: ["creating", "playing", "finished"],
        default: "creating"
    },
    /*attacks: [
        {
            from: {
                type: ObjectId,
                ref: 'User'
            },
            damage: Number,
            sideEffects: {
                type: Number,
            },
            passives: {
                type: Boolean,
            },
        }
    ],*/
    cards: [
        {
            from: {
                type: ObjectId,
                ref: 'User'
            },
            damage: {
                type: Number,
            },
            sideEffects: {
                type: Number,
            },
            passive: {
                type: Boolean,
            },
            required: false
        }
    ],
})