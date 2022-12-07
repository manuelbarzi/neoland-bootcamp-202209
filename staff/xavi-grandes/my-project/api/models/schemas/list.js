const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

module.exports = new Schema({
    user: {
        type: ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})