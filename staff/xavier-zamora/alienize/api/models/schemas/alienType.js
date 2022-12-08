const { Schema } = require('mongoose')
const { ObjectId } = require('mongodb')

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String, 
        required: true
    },
})