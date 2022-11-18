import { IS_EMAIL_REGEX, HAS_SPACES_REGEX, IS_ALPHABETICAL_REGEX } from '../utils/regex'



function registerUser (name, email, password, callback ) {
    if (typeof name !== string) throw new TypeError ('name is not a string')
    if (!IS_ALPHABETICAL_REGEX.test(name)) throw new Error('name is not alphabetical')

    if(typeof email !== 'string') throw new TypeError('email is not a string')
    if(!IS_EMAIL_REGEX.test(email)) throw new Error ('email is not valid')

    if(typeof password !== 'string') throw new TypeError('password is not a string')
    if(HAS_SPACES_REGEX.test(password)) throw new Error('password has spaces')
    if(password.length < 8) throw new Error ('password lenght is less than 8 characters')

    if(typeof callback !== 'function') throw new TypeError ('callback is not a function')

    const xhr = XMLHttpRequest

    xhr.onload = () => {
        const {status, responseText: json} = xhr

        if (status >= 500) {

            // con parse convertimos el string de json en objeto
            // del objeto sacamos la propiedad error y la guardamos en una variable error con valor error
            const { error } = JSON.parse(json)
            // convertimos el string en objeto y recojemos la propiedad error, 

            callback(new Error(error))
            //aqui estoy pasando un string de la const anterior

            return
        }

        callback(null)
    }
    xhr.onerror = () => callback(new Error('connection error'))

    xhr.open('POST', 'http://localhost/users')
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = {name, email, password}

    const json = JSON.stringify(payload)

    xhr.send(json)
}

/**
 * Attends the result of the register
 * @callback callback
 * @param {Error} error The authetication error
 */

export default registerUser