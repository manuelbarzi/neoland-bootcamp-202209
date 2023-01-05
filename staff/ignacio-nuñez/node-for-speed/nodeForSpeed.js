let route = true
let routeLines = '- '
// let randomMovement = Math.round(2 + Math.random() * 5)
let movement = 3
let personLimit
let person2Limit
let person
let personRepeat
let person2
let person2Repeat

const thief = {
    icon: '🚗',
    x: 53,
}

const personInterval = setInterval(() => {
    person = {
        icon: '🚙',
        x: 0,
    }
}, Math.round(2979))

const person2Interval = setInterval(() => {
    person2 = {
        icon: '🚙',
        x: 0,
    }
}, Math.round(4132))

setInterval(() =>{
    routeLines === '- ' ? routeLines = ' -' : routeLines = '- '
},200)

setInterval(() => {
    console.clear()

    if (person) person.x += movement

    if (person2) person2.x += movement

    if (person && thief.x < person.x + 3 && thief.x > person.x - 6)
        route = ''

    if (person) person.x > 57 ? personLimit = '' : personLimit = true

    if (person2 && thief.x < person2.x + 3 && thief.x > person2.x - 6)
        route = true

    if (person2) person2.x > 57 ? person2Limit = '' : person2Limit = true

    personRepeat = person && thief.x > person.x? person.x : -2

    person2Repeat = person2 && thief.x > person2.x ? person2.x : -movement

    render()
}, 100)

function render() {
    console.log('='.repeat(60))

    console.log((person && personLimit ? ' '.repeat(person.x) + person.icon : person = '')
        + (route && ' '.repeat(thief.x - personRepeat) + thief.icon))
    console.log(routeLines.repeat(30))

    console.log((person2 && person2Limit ? ' '.repeat(person2.x) + person2.icon : person2 = '')
        + (!route ? ' '.repeat(thief.x - person2Repeat) + thief.icon : ''))

    console.log('='.repeat(60))
}