const STEP = 1

const police = {
    icon: '🚔',
    x: 0
}

const thief = {
    icon: '🚘',
    x: 5
}

setInterval(() => {
    console.clear()

    police.x += Math.round(Math.random() * STEP)
    thief.x += Math.round(Math.random() * STEP)

    //if (police.x > thief.x) thief.x = police.x // BAD friend!

    render()
}, 100)

function render() {
    console.log('='.repeat(100))
    console.log(' '.repeat(police.x) + police.icon)
    console.log('- '.repeat(50))
    console.log(' '.repeat(thief.x) + thief.icon)
    console.log('='.repeat(100))
}