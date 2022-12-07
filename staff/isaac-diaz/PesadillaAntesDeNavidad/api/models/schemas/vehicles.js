const { Schema } = require('mongoose')

module.exports = new Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true,        
    },
    type: {
        type: String,
        required: true
    },
    lisence: {
        type: String,
        required: true,
        unique: true
    }
})