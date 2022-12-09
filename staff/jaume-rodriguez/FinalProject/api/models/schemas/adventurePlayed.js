const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

module.exports = new Schema({
    adventure: {
        type: ObjectId,
        ref: 'Adventure',
        required: true
    },
    stepsCompleted: {
        type: Number,
        default: 1,
        required: true
    },
    timesCompleted: {
        type: Number,
        default: 0,
        required: true
    }
})