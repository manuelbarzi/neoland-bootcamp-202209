module.exports = (gold) => {
    if (gold < 1000) throw new TypeError('Not enough gold')
}