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
    combatPoints: {
        type: Number,
        default: 25,
        required: true
    },
    level: {
        type: Number,
        default: 1,
        required: true
    },
    gold: {
        type: Number,
        default: 50,
        required: true
    },
    lastQuestPlayedText: {
        type: String,
        default: ' ',
        required: true
    },
    lastQuestPlayedTime: {
        type: Number,
        default: 0,
        required: true
    },
    questsPlayed: [questPlayed],
    adventuresPlayed: [adventurePlayed]
})