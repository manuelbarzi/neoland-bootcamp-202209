const { model } = require('mongoose')
const { user, post, task } = require('./schemas')

const User = model('User', user)
const Post = model('Post', post)
const Task = model('Task', task)

module.exports = {
    User,
    Post,
    Task
}