module.exports = (req, res, next) => {
    res.setHeaders('Allow-Control-Allow-Origin', '*')
    res.setHeaders('Access-Control-Allow-Origin', '*')
    res.setHeaders('Access-Control-Allow-Headers', '*')
    //res.setHeaders('Access-Control-Allow-Methods', '*')

    next()
}