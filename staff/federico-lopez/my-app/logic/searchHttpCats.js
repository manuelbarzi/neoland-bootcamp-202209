const { readFile } = require("fs");

function searchHttpCats(query, callback) {
  if (query.trim() === "") callback(new Error("query is empty"));
  if (typeof query !== "string") throw new TypeError("query is not a string");
  if (typeof callback !== "function")
    throw new TypeError("callback is not a function");

  readFile("./data/cats.json", "utf8", (error, json) => {
    if (error) {
      callback(error);

      return;
    }

    const cats = JSON.parse(json);

    const filtered = cats.filter(
      (cat) => cat.code.includes(query) || cat.text.includes(query)
    );

    callback(null, filtered);
  });
}

module.exports = searchHttpCats;
