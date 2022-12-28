module.exports = (gold) => {
    if (gold < 1500) throw new TypeError('Not enough gold')
}