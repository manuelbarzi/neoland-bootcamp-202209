const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

module.exports = new Schema({
    list: {
        type: ObjectId
    },
    title: {
        type: String
    },
    amount: {
        type: Number
    },
    quantity: {
        type: Number
    },
    status: {
        type: Boolean 
    }
})