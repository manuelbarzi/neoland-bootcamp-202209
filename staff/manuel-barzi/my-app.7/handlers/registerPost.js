const registerUser = require('../logic/registerUser')

module.exports = (req, res) => {
    let content = ''

    req.on('data', chunk => content += chunk.toString())

    req.on('end', () => {
        // name=Wendy%20Darling&email=wendy%40darling.com&password=123123123 // url-encoded

        let { name, email, password } = content.split('&').reduce((body, keyValue) => {
            // const { 0: key, 1: value } = keyValue.split('=')
            const [key, value] = keyValue.split('=')

            body[key] = value

            return body
        }, {})

        name = name.replace('+', ' ')
        email = email.replace('%40', '@')

        try {
            registerUser(name, email, password, error => {
                if (error) {
                    res.status(500)
                    res.send(error.message)

                    return
                }

                res.redirect('/login')
            })
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    })
}