const { Schema } = require('mongoose')
const { ObjectId } = require('mongodb')

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    player: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    playerObjective: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    type: {
        type: String, 
        required: false
    },
    damage: {
        type: Number,
        required: false
    },
    updateStats: {
        name: {
            type: String,
        },
        value: {
            type: Number,
        },
        required: false
    },
    passives: {
        name: {
            type: String,
            required: false
        },
        value: {
            type: Boolean,
            required: false
        }
    }
})