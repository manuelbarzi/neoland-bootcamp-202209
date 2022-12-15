const { ObjectId } = require("mongodb");
const {
  errors: { FormatError },
} = require("com");
const { User, List, Item } = require("../models");
/**
 * Retrieves all lists (from the user)
 *
 * @param {string} listId The list id
 * @param {string} userId The user id
 */
module.exports = function(userId, listId) {
  if (typeof userId !== "string") throw new TypeError("userId is not a string");
  if (!userId.length) throw new FormatError("userId is empty");
  if (typeof listId !== "string") throw new TypeError("listId is not a string");
  if (!listId.length) throw new FormatError("listId is empty");

  return User.findById(userId)
    .then((user) => {
      if (!user) throw new Error(`list with id ${userId} does not exist`);

      return List.findOne({ user: ObjectId(userId) }).lean();
    })
    .then((list) => {
      if (!list) throw new Error(`list with id ${listId} does not exist`);

      return Item.find({ list: ObjectId(listId) }).lean();
    })
    .then((items) => {
      items.forEach((item) => {
        item.id = item._id.toString();
        delete item._id;
        delete item.id;
        delete item.__v;
      });

      return items;
    });
};
