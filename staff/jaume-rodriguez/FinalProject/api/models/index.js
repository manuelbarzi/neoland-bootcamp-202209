const { model } = require('mongoose')
const { user, quest, adventure, post, task, adventurePlayed, questPlayed } = require('./schemas')

const User = model('User', user)
const Quest = model('Quest', quest)
const Adventure = model('Adventure', adventure)
const Post = model('Post', post)
const Task = model('Task', task)
const AdventurePlayed = model('AdventurePlayed', adventurePlayed)
const QuestPlayed = model('QuestPlayed', questPlayed)


module.exports = {
    User,
    Quest,
    Adventure,
    Post,
    Task,
    QuestPlayed,
    AdventurePlayed
}