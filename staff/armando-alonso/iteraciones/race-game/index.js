const STEP = 5

const rusia = {
    icon: '🚀',
    x: 0
}

const usa = {
    icon: '🚀',
    x: 0
}



var id = setInterval(() => {
    console.clear()

    rusia.x += Math.round(Math.random() * STEP)
    usa.x += Math.round(Math.random() * STEP)
    if (rusia.x > 100) { 
        usa.icon = ''
        clearInterval(id)
    }

    if (usa.x > 100) { 
        rusia.icon = ''
        clearInterval(id)
    }

    render()
}, 500)



function render() {

    if (rusia.x < 100) {
        console.log(' '.repeat(rusia.x) + rusia.icon)
    } else {
        rusia.icon = '💥'
        console.log(rusia.icon)
    }

    
    if (usa.x < 100){
        console.log(' '.repeat(usa.x) + usa.icon)
    } else {
        usa.icon = '💥'
        console.log(usa.icon)
    }
    
}