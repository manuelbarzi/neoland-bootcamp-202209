const { readFile, writeFile } = require("fs");

function deletePost(userId, postId, callback) {
  if (typeof userId !== "string") throw new TypeError("userId is not a string");
  if (!userId.length) throw new Error("userId is empty");
  if (typeof postId !== "string") throw new TypeError("postId is not a string");
  if (!postId.length) throw new Error("postId is empty");
  if (typeof callback !== "function")
    throw new TypeError("callback is not a function");

  readFile("./data/users.json", "utf8", (error, json) => {
    if (error) {
      callback(error);

      return;
    }

    const users = JSON.parse(json);

    const user = users.find((user) => user.id === userId);

    if (!user) {
      callback(new Error(`user with id ${userId} does not exist`));

      return;
    }

    readFile("./data/posts.json", "utf8", (error, json) => {
      if (error) {
        callback(error);

        return;
      }

      const posts = JSON.parse(json);

      const postIndex = posts.findIndex((post) => post.id === postId);

      if (postIndex === -1) {
        callback(new Error(`post with id ${postId} does not exist`));

        return;
      }

      if (posts[postIndex].user !== userId) {
        callback(
          new Error(
            `post with id ${postId} does not belong to user with id ${userId}`
          )
        );

        return;
      }

      posts.splice(postIndex, 1);

      const newJson = JSON.stringify(posts);

      writeFile("./data/posts.json", newJson, (error) => {
        if (error) {
          callback(error);

          return;
        }

        callback(null);
      });
    });
  });
}

module.exports = deletePost;
