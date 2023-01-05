const context = require('./context')
const ObjectId = require('mongodb').ObjectId;


module.exports = function retrievePosts(userId, page, limit) {
  if (!userId.length) throw new Error('userId is empty')
  if (typeof userId !== 'string') throw new TypeError('userId is not a string')
  if (typeof page !== 'string') throw new Error('page is not a string')
  if(typeof limit !== 'number') throw new Error('limit is not a number')

  const { db } = context

  const users = db.collection('users')
  const posts = db.collection('posts')

  users.findOne({ _id: ObjectId(userId) })
    .then(user => {
      if (!user) throw new Error(`user with id ${userId} dont exist`)
    })

  const postsFrom = page * 6 - 6

  return posts.find({
    $or: [
      { user: ObjectId(userId) },
      { visibility: 'public' }
    ]
  }).sort({ date: -1 }).limit(limit).skip(postsFrom).toArray()
    .then(postsUsers => {
      const userFinds = postsUsers.map(post => users.findOne({ _id: ObjectId(post.user) }))

      return Promise.all(userFinds)
        .then(usersPost => {
          postsUsers.forEach((userPost, index) => {
            const { _id, name } = usersPost[index]

            userPost.user = { id: _id.toString(), name }

            userPost.id = userPost._id.toString()
            delete userPost._id
          })

          return postsUsers
        })

    })
}