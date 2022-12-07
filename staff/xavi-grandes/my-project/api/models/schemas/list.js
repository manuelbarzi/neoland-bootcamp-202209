const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

module.exports = new Schema({
    list: {
        type: ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})