const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

module.exports = new Schema({
    quest: {
        type: ObjectId,
        ref: 'Quest',
        required: true
    },
    timesCompleted: {
        type: Number,
        default: 1,
        required: true
    }
})