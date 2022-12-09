const { User, Adventure } = require('../models')

module.exports = function (userId, adventureId) {
    if (typeof userId !== "string") throw new TypeError("userId is not a string");
    if (!userId.length) throw new Error("userId is empty");
    if (typeof adventureId !== "string") throw new TypeError("adventureId is not a string");
    if (!adventureId.length) throw new Error("adventureId is empty");

    return User
        .findById(userId)
        .then((user) => {
            if (!user) throw new Error(`user with id ${userId} not found`);

            return Adventure.findById(adventureId).lean()
        })
        .then((adventure) => {
            if (!adventure) throw new Error(`adventure with id ${adventureId} not found`);

            if (adventure.creator.toString() !== userId)
                throw new Error(
                    `adventure with id ${adventureId} does not belong to user ${userId}`
                );

            return Adventure.deleteOne({ _id: adventureId });
        })
        .then(result => {
            const { acknowledged } = result

            if (!acknowledged) throw new Error(`could not delete adventure with id ${adventureId}`)
        })
};