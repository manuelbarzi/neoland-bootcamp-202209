const { User } = require("../models");

async function registerUser(name, surname, direction, postal, barrio, email, password) {

const regis = await User.findOne({ email })
        if (regis) {
            throw new Error(`user with email ${email} already exists`)
        }

        await User.create({ name, surname, direction, postal, barrio, email, password })
        if (regis) {
            return regis
        }

        
}

module.exports = registerUser