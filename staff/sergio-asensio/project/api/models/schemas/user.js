const { Schema } = require('mongoose')

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    // role: {
    //     type: String,
    //     enum: 'admin'        
    // }
    role: {
        type: String,
        enum:['user', 'admin'],
        default: 'user'
    }
})


