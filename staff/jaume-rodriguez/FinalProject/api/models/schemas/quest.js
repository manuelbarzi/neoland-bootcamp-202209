const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

module.exports = new Schema({
    creator: {
        type: ObjectId,
        ref: 'User'
    },
    text: {
        type: String,
        required: true
    },
    isMainQuest: {
        type: Boolean,
        default: 'false',
        required: true
    },
    votes: [{
        type: ObjectId,
        ref: 'User'
    }]
})