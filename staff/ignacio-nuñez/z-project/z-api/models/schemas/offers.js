const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema
const language = require('./language')
const ofStudy = require('./ofStudy')
const ofExperience = require('./ofExperience')
const knowledge = require('./ofKnowledge')

module.exports = new Schema({
    title:{
        type: String,
    },
    description:{
        type: String,
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

    knowledges:[knowledge],

    published:{
        type: Boolean,
    },
    
    user:{
        type: ObjectId,
        ref: 'Users',
        required: true
    }
})