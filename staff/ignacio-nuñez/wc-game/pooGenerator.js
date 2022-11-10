const lluviaCacaIntervalId = setInterval(() => {
    const randomX = Math.random() * 600
    const pooRain = new Character('💩')
    pooRain.newPosition(randomX, 400)
    pooRain.render()

    const pooRainIntervalId = setInterval(() => {
        pooRain.move(0, (-3 - levelCounter*0.2))
        pooRain.render()

        if (hasElementsTouchEachOther(vater, pooRain)) {
            pooRain.container.remove()
            clearInterval(pooRainIntervalId)
        }
        if (pooRain.position.y <= 0){
            failCondition()
            clearInterval(pooRainIntervalId)
            setTimeout(() => pooRain.container.remove(), 20000)
        }
    }, 3)
}, 1000)
