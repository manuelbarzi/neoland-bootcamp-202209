const { Schema } = require('mongoose')

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
    elo: {
        type: Number,
        required: true
    },
    isSearchingGame: {
        type: Boolean,
        default: false,
        required: true
    },
    hasNotGame: {
        type: Boolean,
        default: false,
        required: true
    },
    roomId: {
        type: String,
        required: true
    }
})