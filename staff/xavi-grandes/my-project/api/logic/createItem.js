const { List } = require("../models");
const { Item } = require("../models");

module.exports = function (listId, title) {
  // TODO validate user
  if (typeof listId !== "string") throw new TypeError("listId is not a string");
  if (!listId.length) throw new Error("listId is empty");
  if (typeof title !== "string") throw new TypeError("title is not a string");
  if (!title.length) throw new Error("title is empty");

  return List.findById(listId)
    .then((list) => {
      if (!list) throw new Error(`list with id ${listId} does not exist`);

      return Item.create({ list: listId, title, status: false, quantity: 0, price: 0 });
    })
    .then(() => {});
};
