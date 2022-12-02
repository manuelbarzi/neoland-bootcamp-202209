const jwt = require('jsonwebtoken')

// API

const userId = '6380ad64113e76c3df34850c'

const payload = { sub: userId }

const secret = 'cuando era pequeño hacia experimentos sociales'

let token = jwt.sign(payload, secret, { expiresIn: '10s' })

// App

/*
sessionStorage.token = token  // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MzgwYWQ2NDExM2U3NmMzZGYzNDg1MGMiLCJpYXQiOjE2Njk4MDUwNzV9.4TrpsdTt7J7kxRNxWa7HYdF00nWfaSdQdBWjePpH0Lw'

var tokenParts = token.split('.')

var payload64 = tokenParts[1]

var payloadJSON = atob(payload64)

var payload = JSON.parse(payloadJSON)

payload.sub = '637f63c7d1a79de51e0bca71'

payloadJSON = JSON.stringify(payload)

payload64 = btoa(payloadJSON)

tokenParts[1] = payload64

token = tokenParts.join('.') // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MzdmNjNjN2QxYTc5ZGU1MWUwYmNhNzEiLCJpYXQiOjE2Njk4MDUwNzV9.4TrpsdTt7J7kxRNxWa7HYdF00nWfaSdQdBWjePpH0Lw'

sessionStorage.token = token
*/

//token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MzdmNjNjN2QxYTc5ZGU1MWUwYmNhNzEiLCJpYXQiOjE2Njk4MDUwNzV9.4TrpsdTt7J7kxRNxWa7HYdF00nWfaSdQdBWjePpH0Lw'

// API


try {
    const payload = jwt.verify(token, secret)

    const { sub: userId } = payload

    console.log('token valid... ')
} catch (error) {
    console.error(error.message)
}
