const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

module.exports = new Schema({
    user: {
        type: ObjectId,
        ref: 'Users', 
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true       
    },
    type: {
        type: String,
        required: true
    },
    license: {
        type: String,
        required: true,
        unique: true
    },
    licenseDate: {
        type: Date,
        required: true,
    },
    kms: {
        type: String,
        required: true
    }
})