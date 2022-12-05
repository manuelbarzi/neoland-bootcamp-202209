const { Schema } = require('mongoose')


module.exports = new Schema({
    id: {
        type: String,
        required: true
    },
    player1: {
        type: Object,
        required: true
    },
    player2: {
        type: Object,
        required: true,
    },
    roomId: {
        type: Number,
        required: true
    },
})