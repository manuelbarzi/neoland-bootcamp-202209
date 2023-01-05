const context = require('./context')
const ObjectId = require('mongodb').ObjectId;

module.exports = function retrievePostsPerfil(userId, page, limit) {
  if (!userId.length) throw new Error('userId is empty')
  if (typeof userId !== 'string') throw new TypeError('userId is not a string')
  if (typeof page !== 'string') throw new Error('page is not a string')
  if (typeof limit !== 'number') throw new Error('limit is not a number')

  const { db } = context

  const users = db.collection('users')
  const posts = db.collection('posts')

  return users.findOne({ _id: ObjectId(userId) })
    .then(user => {
      if (!user) throw new Error(`user with id ${userId} dont exist`)

      const postsFrom = page * 6 - 6

      return posts.find({
        user: ObjectId(userId)
      }).sort({ date: -1 }).limit(limit).skip(postsFrom).toArray()
      .then(postsUser => {
        postsUser.forEach((userPost) => {
          userPost.id = userPost._id.toString()
          userPost.user = { id: userId, name: user.name }
          
          delete userPost._id
        })
        return postsUser
      })
    })
}