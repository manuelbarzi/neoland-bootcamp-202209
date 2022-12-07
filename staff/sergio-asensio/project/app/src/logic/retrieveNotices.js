// export default function (token) {
//     if (typeof token !== 'string') throw new TypeError('token is not a string')
//     if (!token.length) throw new Error('token is empty')

//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest

//         xhr.onload = function () {
//             const { status, responseText: json } = xhr

//             if (status >= 500) {
//                 const { error } = JSON.parse(json)

//                 reject(new Error(error))

//                 return
//             }

//             const notices = JSON.parse(json)

//             resolve(notices)
//         }

//         xhr.onerror = () => reject(new Error('connection error'))

//         xhr.open('GET', 'http://localhost/notices')
//         xhr.setRequestHeader('Authorization', `Bearer ${token}`)
//         xhr.send()
//     })

// }