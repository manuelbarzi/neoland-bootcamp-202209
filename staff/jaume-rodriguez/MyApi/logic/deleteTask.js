const context = require("./context");
const { ObjectId } = require("mongodb");

module.exports = function (userId, taskId) {
    if (typeof userId !== "string") throw new TypeError("userId is not a string");
    if (!userId.length) throw new Error("userId is empty");
    if (typeof taskId !== "string") throw new TypeError("taskId is not a string");
    if (!taskId.length) throw new Error("taskId is empty");

    const { db } = context;

    const users = db.collection("users");
    const tasks = db.collection("tasks");

    return users.findOne({ _id: new ObjectId(userId) })
        .then((user) => {
            if (!user) throw new Error(`user with id ${userId} not found`);

            return tasks.findOne({ _id: new ObjectId(taskId) });
        })
        .then((task) => {
            if (!task) throw new Error(`task with id ${taskId} not found`);

            if (task.user.toString() !== userId)
                throw new Error(
                    `task with id ${taskId} does not belong to user ${userId}`
                );

            return tasks.deleteOne({ _id: new ObjectId(taskId) });
        })
        .then(result => {
            const { acknowledged } = result

            if (!acknowledged) throw new Error(`could not delete post with id ${taskId}`)
        })
};