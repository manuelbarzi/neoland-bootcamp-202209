Array.prototype.random = function() {
    const randomIndex = Math.floor(Math.random() * this.length)
    return this[randomIndex]
}

function User(name, age, profesion) {
    this.name = name
    this.age = age
    this.profesion = profesion
}

User.prototype.getInfo = function() {
    return this.name + ' is ' + this.age + ' years old and is ' + this.profesion
}