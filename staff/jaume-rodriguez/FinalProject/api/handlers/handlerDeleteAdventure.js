const deleteAdventure = require("../logic/deleteAdventure");

module.exports = (req, res) => {
    try {
        const { userId, params: { adventureId } } = req;

        deleteAdventure(userId, adventureId)
            .then(() => res.status(204).send())
            .catch((error) => res.status(500).json({ error: error.message }));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};