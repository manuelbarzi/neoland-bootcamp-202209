import { errors, validators } from 'com'
import extractSubFromToken from '../utils/extractSubFromToken'

const { LengthError, NotFoundError, UnexpectedError, ConflictError } = errors
const { stringValidator } = validators

function retrieveOfferToUpdate(offerId, offerUserId, token) {
    stringValidator(offerId, 'offerId')
    stringValidator(offerUserId, 'offerUserId')
    stringValidator(token, 'token')
    
    const userId = extractSubFromToken(token)

    if (offerUserId !== userId) throw new Error('userId is different than offerUserId')

    return fetch(`http://localhost:80/offers/${offerId}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            if (res.status === 200) {
                return res.json()
                    .then(offer => offer)
            }
            else if (res.status === 400) {
                return res.json()
                    .then(error => {
                        if (error.error.includes('is not a')) throw new TypeError(error.error)
                        else if (error.error.includes('length')) throw new LengthError(error.error)
                    })
            } else if (res.status === 404) {
                return res.json()
                    .then(error => {
                        throw new NotFoundError(error.error)
                    })
            } else if (res.status === 409) {
                return res.json()
                    .then(error => {
                        throw new ConflictError(error.error)
                    })
            }
            else if (res.status < 500)
                throw new UnexpectedError('client error')
            else
                throw new UnexpectedError('server error')
        })
}

export default retrieveOfferToUpdate