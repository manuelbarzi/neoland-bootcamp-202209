const { Schema } = require('mongoose')
const { ObjectId } = require('mongodb')

module.exports = new Schema({
    damage: {
        type: Number
    },
    playerName: {
        type: String,
        required: true
    },
    passives: {
        type: Array
    },
    date: {
        type: Date,
        required: true
    }
})