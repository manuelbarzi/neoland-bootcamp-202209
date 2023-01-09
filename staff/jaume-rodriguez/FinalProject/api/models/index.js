const { model } = require('mongoose')
const { user, quest, adventure, post, adventurePlayed, questPlayed } = require('./schemas')

const User = model('User', user)
const Quest = model('Quest', quest)
const Adventure = model('Adventure', adventure)
const Post = model('Post', post)
const AdventurePlayed = model('AdventurePlayed', adventurePlayed)
const QuestPlayed = model('QuestPlayed', questPlayed)


module.exports = {
    User,
    Quest,
    Adventure,
    Post,
    QuestPlayed,
    AdventurePlayed
}