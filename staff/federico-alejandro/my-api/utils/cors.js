module.exports = (req, res, next) => {
    res.setHeader('Allow-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    //res.setHeaders('Access-Control-Allow-Methods', '*')

    next()
}