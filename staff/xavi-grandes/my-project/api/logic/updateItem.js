const { Item } = require('../models')
/**
 * Retrieves all lists (from the user)
 * 
 * @param {string} itemId The item id
 * @param {string} title The title of the item
 * @param {string} quantity The quantity of the item
 * @param {string} amount The amount of the item
 */
module.exports = function(itemId, title, quantity, amount) {
    if (typeof itemId !== "string") throw new TypeError("itemId is not a string");
    if (!itemId.length) throw new Error("itemId is empty");
    if (typeof title !== "string") throw new TypeError("title is not a string");
    if (!title.length) throw new Error("title is empty");
    if (typeof quantity !== "string") throw new TypeError("quantity is not a string");
    if (typeof amount !== "string") throw new TypeError("amount is not a string");

    return Item.findById(itemId)
        .then(item => {
            if (!item)
                throw new Error(`item with id ${itemId} does not exist`)

               return Item.findById(itemId).updateOne({$set: { title, quantity, amount } })              
        })
}