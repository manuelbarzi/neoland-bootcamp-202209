const { Schema } = require('mongoose')

module.exports = new Schema({
    type: {
        type: String,
        required: true,
        enum: ['income', 'expense']
    }
    
})