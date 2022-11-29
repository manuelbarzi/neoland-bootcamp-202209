const deleteTask = require("../logic/deleteTask");

module.exports = (req, res) => {
    const {
        headers: { authorization },
        params: { taskId },
    } = req;

    const userId = authorization.substring(7);

    try {
        deleteTask(userId, taskId)
            .then(() => res.status(204).send())
            .catch((error) => res.status(500).json({ error: error.message }));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};