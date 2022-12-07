const { Schema } = require('mongoose')

module.exports = new Schema({
    list: {
        type: ObjectId
        // - list (ObjectId, buying list id)
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number,
        required: true
    }
})