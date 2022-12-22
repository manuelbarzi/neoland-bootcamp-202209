const { Schema } = require('mongoose')
const { ObjectId } = require('mongodb')

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    stats: {
        healthPoints: Number,
        especialDefense: Number,
        fisicDefense: Number,
        especialAtack: Number,
        fisicAtack: Number,
        psiquicalAtack: Number,
        speed: Number,
        healing: Number,
        repeat: Number,
    },
    type: {
        type: String, 
        required: true
    },
    atack1: {
        type: String,
        required: true
    },
    atack2: {
        type: String,
        required: true
    },
    atack3: {
        type: String,
        required: true
    },
    atack4: {
        type: String,
        required: true
    },
    passives: {
        passiveEfect: false,
        paralyzed: false,
        poisoned: false,
        predicted: false
    }
})