const { Schema } = require('mongoose')

module.exports = new Schema({
    salary: {
        type: String,
    },
    currency:{
        type: String,
        enum:['$', '€']
    }
})