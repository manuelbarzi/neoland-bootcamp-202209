const { readFile } = require("fs");

/**
 * Retrieves all public posts (from all users)
 *
 * @param {*} userId
 * @param {*} callback
 */
function retrievePublicPosts(userId, callback) {
  if (typeof userId !== "string") throw new TypeError("userId is not a string");
  if (!userId.length) throw new Error("userId is empty");
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

      const publics = posts.filter((post) => {
        if (post.visibility === "public") {
          delete post.visibility;

          return true;
        }

        return false;
      });

      publics.forEach((post) => {
        const user = users.find((user) => user.id === post.user);

        if (!user) {
          post.user = { id: post.user, name: null };
        } else {
          post.user = { id: post.user, name: user.name };
        }
      });

      publics.sort((a, b) => (a.date > b.date ? -1 : a.date < b.date ? 1 : 0));

      callback(null, publics);
    });
  });
}

module.exports = retrievePublicPosts;
