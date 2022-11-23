const { readFile } = require('fs')

module.exports = function retrievePostsPerfil(userId, callback){
  if (!userId.length) throw new Error('userId is empty')
  if (typeof userId !== 'string') throw new TypeError('userId is not a string')
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

       const postsToRetrieve = posts.filter(post => post.userId === userId)

       postsToRetrieve.forEach(post => {
        userPost = users.find(user => {
          return post.userId === user.userId
        })
        if(!userPost) post.userName = null
        post.userName = userPost.name
    });

       postsToRetrieve.sort((a, b) => {
        if (a.date < b.date) {
          return 1;
        }
        if (a.date > b.date) {
          return -1;
        }
        return 0;
      });

        callback(null, postsToRetrieve)
    })
  })
}