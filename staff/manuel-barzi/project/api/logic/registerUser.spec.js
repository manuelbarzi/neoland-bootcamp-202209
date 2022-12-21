require('dotenv').config()

const { connect, disconnect } = require('mongoose')
const registerUser = require('./registerUser')
const { expect } = require('chai')
const { User } = require('../models')
const { compareSync } = require('bcryptjs')

const {
    errors: { ConflictError }
} = require('com')

describe('registerUser', () => {
    before(() => connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => User.deleteMany())

    it('succeeds on new user', () => { // happy path
        debugger
        return registerUser('Oso Perez', 'oso@perez.com', '123123123')
            .then(() => User.findOne({ email: 'oso@perez.com' }))
            .then(user => {
                expect(user).to.exist
                expect(user.name).to.equal('Oso Perez')
                //expect(user.email).to.equal('oso@perez.com')
                expect(compareSync('123123123', user.password)).to.be.true
            })
    })

    it('fails on existing user', () => { // unhappy path
        return User.create({ name: 'Cape Rucita', email: 'cape@rucita.com', password: '123123123' })
            .then(() => registerUser('Cape Rucita', 'cape@rucita.com', '123123123'))
            .then(() => { throw new Error('should not reach this point') })
            .catch(error => {
                expect(error).to.be.instanceOf(ConflictError)
                expect(error.message).to.equal('user with email cape@rucita.com already exists')
            })
    })

    after(() => disconnect())
})