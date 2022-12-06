const { User, Post } = require('../models')

module.exports = function (userId, postId) {
    if (typeof userId !== "string") throw new TypeError("userId is not a string");
    if (!userId.length) throw new Error("userId is empty");
    if (typeof postId !== "string") throw new TypeError("postId is not a string");
    if (!postId.length) throw new Error("postId is empty");

    return User
        .findById(userId)
        .then((user) => {
            if (!user) throw new Error(`user with id ${userId} not found`);

            return Post.findById(postId).lean()
        })
        .then((post) => {
            if (!post) throw new Error(`post with id ${postId} not found`);

            if (post.user.toString() !== userId)
                throw new Error(
                    `post with id ${postId} does not belong to user ${userId}`
                );

            return Post.deleteOne({ _id: postId });
        })
        .then(result => {
            const { acknowledged } = result

            if (!acknowledged) throw new Error(`could not delete post with id ${postId}`)
        })
};