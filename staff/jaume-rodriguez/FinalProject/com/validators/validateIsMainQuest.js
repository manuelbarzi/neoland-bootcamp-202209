module.exports = (isMainQuest) => {
    if (typeof isMainQuest !== 'boolean') throw new TypeError('isMainQuest is not a boolean')
    if (isMainQuest !== true && isMainQuest !== false) throw new Error('invalid isMainQuest')
}