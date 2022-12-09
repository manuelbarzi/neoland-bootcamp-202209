const { Schema } = require('mongoose')
const questPlayed = require('./questPlayed')
const adventurePlayed = require('./adventurePlayed')

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    exp: {
        type: Number,
        default: 100,
        required: true
    },
    questsPlayed: [questPlayed],
    adventuresPlayed: [adventurePlayed]
})