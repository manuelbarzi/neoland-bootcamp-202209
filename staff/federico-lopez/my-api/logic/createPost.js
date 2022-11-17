const { readFile, writeFile } = require("fs");

function createPost(userId, text, visibility, callback) {
  // TODO validate inputs

  if (typeof userId !== "string") throw TypeError("userId is not a string");
  if (userId.length === 0) throw new Error("userId is empty");
  // if(!userId) throw new Error('userId is empty')
  if (typeof text !== "string") throw TypeError("text is not a string");
  if (text.length === 0 || text.trim() === "") throw new Error("text is empty");
  if (typeof visibility !== "string")
    throw TypeError("visibility is not a string");
  if (visibility !== "public" && visibility !== "private")
    throw Error('visibility is not "public" or "private"');
  if (typeof callback !== "function")
    throw new TypeError("callback is not a function");

  readFile("./data/users.json", "utf-8", (error, data) => {
    if (error) {
      callback(error);

      return;
    }

    const users = JSON.parse(data);

    const userExists = users.some((user) => user.id === userId);

    if (!userExists) {
      callback(new Error("user not found"));

      return;
    }

    const post = {
      user: userId,
      text,
      visibility,
      date: new Date().toISOString(),
    };

    writeFile("./data/posts.json", JSON.stringify(post), (error) => {
      if (error) {
        callback(error);

        return;
      }

      callback(null);
    });
  });
}

module.exports = createPost;
