const { User, Task } = require('../models')

module.exports = function (userId, taskId) {
    if (typeof userId !== "string") throw new TypeError("userId is not a string");
    if (!userId.length) throw new Error("userId is empty");
    if (typeof taskId !== "string") throw new TypeError("taskId is not a string");
    if (!taskId.length) throw new Error("taskId is empty");

    return User.findById(userId)
        .then((user) => {
            if (!user) throw new Error(`user with id ${userId} not found`);

            return Task.findById(taskId).lean()
        })
        .then((task) => {
            if (!task) throw new Error(`task with id ${taskId} not found`);

            if (task.user.toString() !== userId)
                throw new Error(
                    `task with id ${taskId} does not belong to user ${userId}`
                );

            return Task.deleteOne({ _id: taskId })
        })
        .then(result => {
            const { acknowledged } = result

            if (!acknowledged) throw new Error(`could not delete post with id ${taskId}`)
        })
};