import { IS_EMAIL_REGEX, HAS_SPACES_REGEX } from '../utils/regex'

function authenticateUser(email, password) {

    if (typeof email !== 'string') throw new Error('email is not a string')
    if (!IS_EMAIL_REGEX.test(email)) throw new Error('email is not valid')

    if (typeof password !== 'string') throw new Error('password is not a string')
    if (password.length < 7) throw new Error('password length is less than 7')
    if (HAS_SPACES_REGEX.test(password)) throw new Error('password has spaces')

    return fetch('http://localhost:80/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => {
            if(res.status === 500) throw new Error('Server internal error')

            else if(res.status === 404) throw new Error ('User dont exist')
            
            else if (res.status === 401) throw new Error('Wrong password')

            return res.json()
        })
        .then(data => {
            const { userId } = data

            return userId
        })
}

export default authenticateUser
