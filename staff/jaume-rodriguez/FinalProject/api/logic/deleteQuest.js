const { User, Quest } = require('../models')

module.exports = function (userId, questId) {
    if (typeof userId !== "string") throw new TypeError("userId is not a string");
    if (!userId.length) throw new Error("userId is empty");
    if (typeof questId !== "string") throw new TypeError("questId is not a string");
    if (!questId.length) throw new Error("questId is empty");

    return User
        .findById(userId)
        .then((user) => {
            if (!user) throw new Error(`user with id ${userId} not found`);

            return Quest.findById(questId).lean()
        })
        .then((quest) => {
            if (!quest) throw new Error(`quest with id ${questId} not found`);

            if (quest.creator.toString() !== userId)
                throw new Error(
                    `quest with id ${questId} does not belong to user ${userId}`
                );

            return Quest.deleteOne({ _id: questId });
        })
        .then(result => {
            const { acknowledged } = result

            if (!acknowledged) throw new Error(`could not delete quest with id ${questId}`)
        })
};