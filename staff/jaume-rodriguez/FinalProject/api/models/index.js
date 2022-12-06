const { model } = require('mongoose')
const { user, quest, adventure, post, task } = require('./schemas')

const User = model('User', user)
const Quest = model('Quest', quest)
const Adventure = model('Adventure', adventure)
const Post = model('Post', post)
const Task = model('Task', task)

module.exports = {
    User,
    Quest,
    Adventure,
    Post,
    Task
}