const mongoose = require('mongoose')

const { Schema, model } = mongoose
const { Types: { ObjectId } } = Schema

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const post = new Schema({
    user: {
        type: ObjectId,
        ref: 'User'
    },
    text: {
        type: String,
        required: true
    },
    visibility: {
        type: String,
        enum: ['public', 'private'],
        default: 'public',
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

const User = model('User', user)
const Post = model('Post', post)

mongoose.connect('mongodb://127.0.0.1:27017')
    .then(() => mongoose.connection.dropDatabase())
    .then(() => User.create({ name: 'Pepito Grillo', email: 'pepito@grillo.com', password: '123123123'}))
    // .then(() => {
    //     const user = new User

    //     user.name = 'Peter Pan'
    //     user.email = 'peter@pan.com'
    //     user.password = '123123123'

    //     return user.save()
    // })
    //  .then(() => {
    //     const user = new User({ name: 'Peter Pan', email: 'peter@pan.com', password: '123123123' })

    //     return user.save()
    // })
    // .then(user => {
    //     user.name = 'Pepita Grilla'

    //     return user.save()
    // })
    .then(user => {
        const post1 = new Post({ user: user.id, text: 'hola mundo', visibility: 'public', date: new Date })
        const post2 = new Post({ user: user.id, text: 'hello world', visibility: 'public', date: new Date })
        const post3 = new Post({ user: user.id, text: 'ciao mondo', visibility: 'public', date: new Date })

        return Promise.all([
            post1.save(),
            post2.save(),
            post3.save()
        ])
    })
    .then(posts => {
        const [post1, post2, post3] = posts

        const userId = post1.user

        return User.findById(userId)
    })
    .then(user => {
        user.name = 'Abe Jorro'
        user.email = 'abe@jorro.com'

        return user.save()
    })
    .then(user => {
        return Post.find({ user: user.id })
    })
    .then(posts => {
        const [post1, post2, post3] = posts

        post1.text += ' UPDATED'
        post2.text += ' UPDATED'
        post3.text += ' UPDATED' 

        return Promise.all([post1.save(), post2.save(), post3.save()])
    })
    .then(posts => {
        const [,post2] = posts

        return Post.deleteOne({ _id: post2.id })
    })
    .then(() => {
        return Post.find().populate('user', '-password -email')
    })
    .then(posts => {

    })
    .then(() => mongoose.disconnect())