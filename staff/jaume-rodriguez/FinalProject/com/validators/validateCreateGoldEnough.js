module.exports = (gold) => {
    if (gold < 100) throw new TypeError('Not enough gold')
}