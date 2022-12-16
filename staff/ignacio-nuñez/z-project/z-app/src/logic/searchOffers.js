import { validators, errors } from 'com'
const { UnexpectedError } = errors
const { stringValidator } = validators

function searchOffer(token, keyQuery = '', locationQuery = '') {
    stringValidator(token, 'token')
    if (keyQuery) stringValidator(keyQuery, 'key word')
    if (locationQuery) stringValidator(locationQuery, 'location')


    return fetch(`http://localhost:80/offers/search?q=${keyQuery}&location=${locationQuery}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            if (res.status === 200) return

            else if (res.status === 400) {
                return res.json()
                    .then(error => {
                        throw new TypeError(error.error)
                    })
            } else if (res.status < 500)
                throw new UnexpectedError('client error')
            else
                throw new UnexpectedError('server error')
        })
}

export default searchOffer