const context = require('./context')
const ObjectId = require('mongodb').ObjectId;

module.exports = function postsSearchedUserRetrieve(userId, searchedUserId, page, limit) {
    if (!userId.length) throw new Error('userId is empty')
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!searchedUserId.length) throw new Error('searchedUserId is empty')
    if (typeof searchedUserId !== 'string') throw new TypeError('searchedUserId is not a string')
    if (typeof page !== 'string') throw new Error('page is not a string')
    if (typeof limit !== 'number') throw new Error('limit is not a number')

    const { db } = context

    const users = db.collection('users')
    const posts = db.collection('posts')

    users.findOne({ _id: ObjectId(userId) })
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} dont exist`)
        })

    return users.findOne({ _id: ObjectId(searchedUserId) })
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} dont exist`)
            const postsFrom = page * 6 - 6

            return posts.find({
                user: ObjectId(searchedUserId),
                visibility: 'public'
            }).sort({ date: -1 }).limit(limit).skip(postsFrom).toArray()
                .then(postsUser => {
                    postsUser.forEach((userPost) => {
                        userPost.id = userPost._id.toString()

                        delete userPost.user
                        delete userPost._id
                    })
                    return postsUser
                })
        })
}