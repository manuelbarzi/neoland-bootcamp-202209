const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

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
    quests: [{
        type: ObjectId,
        ref: 'Quest',
        timesCompleted: Number,
        required: true
    }],
    adventures: [{
        type: ObjectId,
        ref: 'Adventure',
        setpsCompleted: [{ type: Schema.Types.ObjectId, ref: 'Adventure' }],
        isCompleted: Boolean
    }]
})