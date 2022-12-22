const STEP = 5

const dog = {
    icon: '🐶',
    x: 0
}

const cat = {
    icon: '🐱',
    x: 2 * STEP
}

setInterval(() => {
    console.clear()

    dog.x += Math.round(Math.random() * STEP)
    cat.x += Math.round(Math.random() * STEP)


    render()
}, 2000)

function render() {
    console.log('='.repeat(100))
    console.log(' '.repeat(dog.x) + dog.icon)
    console.log('- '.repeat(50))
    console.log(' '.repeat(cat.x) + cat.icon)
    console.log('='.repeat(100))
}