const { readFile } = require('fs')

module.exports = function retrievePosts(userId, postId, callback) {
  if (!userId.length) throw new Error('userId is empty')
  if (typeof userId !== 'string') throw new TypeError('userId is not a string')
  if (!postId.length) throw new Error('postId is empty')
  if (typeof postId !== 'string') throw new TypeError('postId is not a string')
  if (typeof callback !== 'function') throw new TypeError('callback is not a function')
  readFile('./data/users.json', 'utf8', (error, json) => {
    if (error) {
      callback(error)

      return
    }

    const users = JSON.parse(json)

    const user = users.some(user => user.userId === userId)

    if (!user) {
      callback(new Error('user dont found'))

      return
    }

    readFile('./data/posts.json', (error, data) => {
      if (error) {
        callback(error)

        return
      }
      const posts = JSON.parse(data)

      const post = posts.find(userPost => userPost.postId === postId)

      if (!post) {
        callback(new Error('post dont found'))

        return
      }

      if (post.userId !== userId) {
        callback(new Error(`this post doesnt belong to user with id ${userId}`))

        return
      }

      delete post.date
      delete post.userName
      delete post.userId

      callback(null, post)
    })
  })
}