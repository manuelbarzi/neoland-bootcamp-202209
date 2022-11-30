const deleteTask = require("../logic/deleteTask");

module.exports = (req, res) => {
    try {
        const { userId, params: { taskId } } = req;

        deleteTask(userId, taskId)
            .then(() => res.status(204).send())
            .catch((error) => res.status(500).json({ error: error.message }));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};