const { errors: { LengthError, NotFoundError } } = require('com')
const { User, Post, Comment } = require('../models')

function createComment(userId, postId, text) {
    if (typeof userId !== "string") throw TypeError("userId is not a string")
    if (userId.length === 0) throw new LengthError("userId is empty")
    
    if (typeof postId !== "string") throw TypeError("postId is not a string")
    if (postId.length === 0) throw new LengthError("postId is empty")

    if (typeof text !== "string") throw TypeError("text is not a string")
    if (text.length === 0 || text.trim() === "") throw new LengthError("text is empty")
   
    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            return Post.findById(postId)
        })
        .then(post => {
            if (!post)
                throw new NotFoundError(`post with id ${postId} does not exist`)

            const comment = new Comment({ user: userId, text })

            post.comments.push(comment)

            return post.save()
        })
        .then(result => {})

    // return Post.findById(postId)
    //     .then(post => {
    //         if (!post)
    //             throw new NotFoundError(`post with id ${postId} does not exist`)

    //         return User.findById(userId)
    //     })
    //     .then(user => {
    //         if (!user)
    //             throw new NotFoundError(`user with id ${userId} does not exist`)

    //         const comment = new Comment({ user: userId, text})

    //         return Post.findByIdAndUpdate(postId, { $push: { comments: comment } })
    //     })
    //     .then(result => {
    //         CÓMO SABER SI LA OPERACIÓN SALIÓ BIEN
    //         console.log(result)
    //         debugger
    //     })  
}




module.exports = createComment