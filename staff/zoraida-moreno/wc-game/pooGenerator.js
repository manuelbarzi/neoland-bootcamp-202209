let lluviacacaçintervalId = setInterval(() =>{
    const randomX = Math.random() * 600
    var pooRain = new Character('💩')
    pooRain.newPosition(randomX, 400)
    pooRain.render()

    let pooRainIntervalId = setInterval(() => {

        pooRain.move(0, -2)
        pooRain.render()

        if (hasElementsTouchEachOther(vater, pooRain)) {
            pooRain.container.remove()
            clearInterval(pooRainIntervalId)
        }
        if (pooRain.position.y === 0) 
            clearInterval(pooRainIntervalId)
    }, 10)
}, 1000)