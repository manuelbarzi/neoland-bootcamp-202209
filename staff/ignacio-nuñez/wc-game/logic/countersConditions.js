function hasElementsTouchEachOther(area1, area2) {
    if (((area2.area.x[0] >= area1.area.x[0] && area2.area.x[0] <= area1.area.x[1]) &&
        (area2.area.y[0] >= area1.area.y[0] && area2.area.y[0] <= area1.area.y[1])) ||
        ((area2.area.x[1] >= area1.area.x[0] && area2.area.x[1] <= area1.area.x[1]) &&
            (area2.area.y[1] >= area1.area.y[0] && area2.area.y[1] <= area1.area.y[1]))) {
        succesCounter++
        succesCount.innerText = succesCounter

        succesCondition()

        return true
    }
    else
        return false
}

function failCondition() {
    failCounter++
    failCount.innerText = failCounter
    if (failCounter >= 10 + (levelCounter)) {

        lifesCounter--
        actualLifes.innerText = 'Lifes:' + lifesCounter
        failCounter = 0
    }

    //     if(lifesCounter === 0) {
    //         const poos = document.getElementsByClassName('pooRain')

    //         for (let poo of poos) {
    //             poo.remove()
    //         }
    //     } 
}

function succesCondition() {
    if (succesCounter >= 5 * levelCounter) {
        levelCounter++
        actualLevel.innerText = 'Nivel:' + ' ' + levelCounter
    }
}