const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

module.exports = new Schema({
    user: {
        type: ObjectId,
        ref: 'User'
    },

    month: {
        type: String,
        required: true,
        unique: true
    },

    monthNumber: {
        type: Number
    },
    
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    requeriment: {
        type: String,
        required: true
    },
    capacity: {
        type: Number ,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    inscription: {
        type: String,
        required: true,
        enum:['close', 'open'],
        default: 'close'

    },
    img: {
        type: String,
        // type: [String]
    }
   
})
