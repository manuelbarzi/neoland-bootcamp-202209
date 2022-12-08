const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema
const language = require('./language')
const ofStudy = require('./ofStudy')
const ofExperience = require('./ofExperience')

module.exports = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    photo:{ 
        type: String
    },
    createDate:{
        type: Date,
        required: true
    },
    languages:[language],
    
    studies:[ofStudy],

    experiences:[ofExperience],
    
    user:{
        type: ObjectId,
        ref: 'Users',
        required: true
    }
})