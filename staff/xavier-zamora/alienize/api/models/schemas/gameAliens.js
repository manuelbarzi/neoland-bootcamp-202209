const { Schema } = require('mongoose')
const { ObjectId } = require('mongodb')

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },
    stats: {
        type: Object,
        required: true
    },
    /*type: {
        type: String,
        required: true
    },
    healthPoints: {
        type: Number,
        required: true
    },
    especialDefense: {
        type: Number,
        required: true
    },
    fisicDefense: {
        type: Number,
        required: true
    },
    especialAttack: {
        type: Number,
        required: true
    },
    fisicAttack: {
        type: Number,
        required: true
    },
    psiquicalAttack: {
        type: Number,
        required: true
    },
    speed: {
        type: Number,
        required: true
    },
    healing: {
        type: Number,
        required: true
    },
    repeat: {
        type: Number,
        required: true
    },*/
    attacks: {
        type: [String],
        required: true

    },
    passives: {
        type: [String],
        required: true
    },
    player: {
        type: ObjectId,
        required: true
    }
})