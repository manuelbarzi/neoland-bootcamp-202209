const deletePost = require("../logic/deletePost");

module.exports = (req, res) => {
  const {
    params: { postId },
    headers: { authorization },
  } = req;

  const userId = authorization.substring(7);

  try {
    deletePost(userId, postId, (error) => {
      if (error) {
        res.status(500).json({ error: error.message });

        return;
      }

      res.status(204).send();
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
