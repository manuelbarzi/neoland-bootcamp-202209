const { User, Quest, Adventure } = require('../models')

module.exports = function (userId, adventureId, questId) {
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

            return Adventure.findById(adventureId).lean()
        })
        .then(adventure => {
            if (!adventure)
                throw new Error(`adventure with id ${adventureId} does not exist`)

            const index = adventure.steps.findeIndex(steps => steps.quest.toString() === questId)
            return Adventure.steps[index].deleteOne({ _id: questId });
        })
        .then(result => {
            const { acknowledged } = result

            if (!acknowledged) throw new Error(`could not delete adventure with id ${adventureId}`)
        })
};