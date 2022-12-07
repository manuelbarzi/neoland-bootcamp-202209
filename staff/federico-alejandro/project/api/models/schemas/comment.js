const { Schema } = require('moongose')
const { Types: { ObjectId } } = Schema

module.exports = new Schema({
    post: {
        post: {
            type: ObjectId,
            ref: 'Post'
        }
    },
    user: {
        type: ObjectId,
        ref: 'User'
    },
    text: {
        type: String,
        required: true
    },
    visibility: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date,
        required: true
    },
    answers: [Comments]

})