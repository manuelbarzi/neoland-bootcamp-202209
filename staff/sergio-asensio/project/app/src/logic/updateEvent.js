// import { errors } from 'com'
// const { FormatError, NotFoundError, UnexpectedError, AuthError, LengthError} = errors
// /**
//  * Creates a post against API
//  * 
//  * @param {string} token The user token
//  * @param {string} eventId The notice ID
//  * @param {string} title The notice title
//  * @param {string} body The notice body
//  */
// export default function (token, title, body, requirement, capacity, date, inscription, image) {
//     if (typeof token !== 'string') throw new TypeError('token is not a string')
//     if (!token.length) throw new LengthError('token is empty')

//     if (typeof title !== 'string') throw new TypeError('title is not a string')
//     if (!title.length) throw new LengthError('title is empty')

//     if (typeof body !== 'string') throw new TypeError('body is not a string')
//     if (!body.length) throw new LengthError('body is empty')

//     if (typeof requirement !== 'string') throw new TypeError('requirement is not a string')
//     if (!requirement.length) throw new LengthError('requirement is empty')

//     if (typeof capacity !== 'number') throw new TypeError('capacity is not a number')
//     if (!capacity) throw new LengthError('capacity is empty')

//     if (!(date instanceof Date)) throw new TypeError('date is not a Date')

//     if (typeof inscription !== 'string') throw new TypeError('inscription is not a string')
//     if (inscription !== 'close' && inscription !== 'open') throw new Error('invalid inscription')
//     if (!inscription.length) throw new LengthError('inscription is empty')

//     if (image) {
//         if (typeof image !== 'string') throw new TypeError('image is not a string')
//         if (!image.length) throw new LengthError('image is empty')
//     }


//     return new Promise((resolve, reject) => {

//         const xhr = new XMLHttpRequest
    
//         xhr.onload = () => {
//             const { status, responseText: json } = xhr

//             if (status >= 500) {
//                 const { error } = JSON.parse(json)

//                 reject(new Error(error))

//                 return
//             }
//             resolve()
//         }

//         xhr.onerror = () => reject(new Error('connection error'))

//         xhr.open('PATCH',`http://localhost/eventos/${eventId}`)
//         xhr.setRequestHeader('Authorization', `Bearer ${token}`)
//         xhr.setRequestHeader('Content-Type', 'application/json')

//         const payload = { token, title, body, requirement, capacity, date, inscription, image }

//         const json = JSON.stringify(payload)

//         xhr.send(json)

//     })
// }