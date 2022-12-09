const deleteAdventureStep = require("../logic/deleteAdventureStep");

module.exports = (req, res) => {
    try {
        const { userId, params: { adventureId, questId } } = req;

        deleteAdventureStep(userId, adventureId, questId)
            .then(() => res.status(204).send())
            .catch((error) => res.status(500).json({ error: error.message }));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};