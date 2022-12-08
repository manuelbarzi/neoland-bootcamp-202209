const { model } = require('mongoose')
const { user, post, comment } = require('./schemas')

const User = model('User', user)
const Post = model('Post', post)
const Comment = model('Comment', comment)

module.exports = {
    User,
    Post,
    Comment

}