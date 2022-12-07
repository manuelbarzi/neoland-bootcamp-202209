const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

module.exports = new Schema({
    list: {
        type: ObjectId
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number,
        required: true
    }
})