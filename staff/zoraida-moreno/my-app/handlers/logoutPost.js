module.exports = (req, res) => {
    // res.setHeader('set-cookie', `id=; Expires=${new Date(2000, 0, 1)}`)
    res.clearCookie('id')
    res.redirect('/login')
}