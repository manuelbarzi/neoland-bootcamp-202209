const { readFile } = require('fs')

module.exports = function retrievePostsPerfil(userId, callback){
    readFile('./data/posts.json', (error, data) => {
        if (error) {
          callback(error)

          return
        }
       const posts = JSON.parse(data)

       const postsToRetrieve = posts.filter(post => post.userId === userId)

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
}