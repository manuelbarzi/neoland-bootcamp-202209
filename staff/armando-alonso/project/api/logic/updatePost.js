const { ObjectId } = require('mongodb')
const context = require('./context')

function updatePublication( userId, postId, title, resume, text, topic, visibility) {

    const { db } = context

    const users = db.collection('users')
    const posts = db.collection('posts')

    return users.findOne({ _id: ObjectId(userId) })
        .then(user => {
            if (!user) throw new Error(`El usuario no existe.`)

            return posts.findOne({ _id: ObjectId(postId) })
        })
        .then(post => {
            if (!post) throw new Error('La publicación no existe.')

            post.title = title
            post.resume = resume
            post.text = text
            post.topic = topic
            post.visibility = visibility

            return posts.updateOne({ _id: ObjectId(postId) }, { $set: { title, resume, text, topic, visibility } })
        })
        .then(() => { })








    readFile('./data/users.json', 'utf8', (error, json) => {
        if (error) {
            callback(error)

            return
        }

        const users = JSON.parse(json)

        const exists = users.some(user => user.id === userId)

        if (!exists) {
            callback(new Error(`user with id ${userId} does not exist`))

            return
        }

    readFile('./data/news.json', 'utf8', (error, json) => {
        if (error) {
            callback(error)

            return
        }

        const publications = JSON.parse(json)

        const publication = publications.find(publication => publication.id === publicationId)

        if (!publication) {
            callback(new Error(`Esta publicatión no existe.`))

            return
        }

        if (publication.user !== userId) {
            callback(new Error(`No puedes modificar una publicación que no te pertenece.`))

            return
        }

        publication.title = title
        publication.resume = resume
        publication.text = text
        publication.topic = topic
        publication.visibility = visibility

        const newJson = JSON.stringify(publications, null, 4)

        writeFile('./data/news.json', newJson, error => {
            if (error) {
                callback(error)

                return
            }

            callback(null)
        })
    })

        

    })
}

module.exports = updatePublication