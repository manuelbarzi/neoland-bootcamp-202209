let tRexIntervalIdW, tRexIntervalIdD, tRexIntervalIdS, tRexIntervalIdA
let tRexKeyPressed = []

let humanIntervalIdW, humanIntervalIdD, humanIntervalIdS, humanIntervalIdA
let humanKeyPressed = []

document.onkeydown = function (event) {
    const key = event.key
    switch (key) {
        // T-Rex-----------------------
        case 'w':
            if (!tRexKeyPressed.includes(key)) {
                // tRex.position.y = tRex.position.y + 1
                // tRex.render()
                tRexIntervalIdW = setInterval(() => {
                    tRex.position.y = tRex.position.y + 1

                    tRex.render()
                }, 1)
            }
            tRexKeyPressed[0] = key
            break

        case 'd': if (!tRexKeyPressed.includes(key)) {
            // tRex.position.x = tRex.position.x + 1
            // tRex.render()
            tRexIntervalIdD = setInterval(() => {
                tRex.position.x = tRex.position.x + 1

                tRex.render()
            }, 1)
        }
            tRexKeyPressed[1] = key
            break

        case 's': if (!tRexKeyPressed.includes(key)) {
            // tRex.position.y = tRex.position.y - 1
            // tRex.render()
            tRexIntervalIdS = setInterval(() => {
                tRex.position.y = tRex.position.y - 1

                tRex.render()
            }, 1)
        }
            tRexKeyPressed[2] = key
            break

        case 'a': if (!tRexKeyPressed.includes(key)) {
            // tRex.position.x = tRex.position.x - 1
            // tRex.render()
            tRexIntervalIdA = setInterval(() => {
                tRex.position.x = tRex.position.x - 1

                tRex.render()
            }, 1)
        }
            tRexKeyPressed[3] = key
            break
        // HUMAN-------------------
        case 'ArrowUp': if (!humanKeyPressed.includes(key)) {
            // human.position.y = human.position.y + 1
            // human.render()
            humanIntervalIdW = setInterval(() => {
                human.position.y = human.position.y + 1

                human.render()
            }, 1)
        }
            humanKeyPressed[0] = key
            break

        case 'ArrowRight': if (!humanKeyPressed.includes(key)) {
            // human.position.x = human.position.x + 1
            // human.render()
            humanIntervalIdD = setInterval(() => {
                human.position.x = human.position.x + 1

                human.render()
            }, 1)
        }
            humanKeyPressed[1] = key
            break

        case 'ArrowDown': if (!humanKeyPressed.includes(key)) {
            // human.position.y = human.position.y - 1
            // human.render()
            humanIntervalIdS = setInterval(() => {
                human.position.y = human.position.y - 1

                human.render()
            }, 1)
        }
            humanKeyPressed[2] = key
            break

        case 'ArrowLeft': if (!humanKeyPressed.includes(key)) {
            // human.position.x = human.position.x - 1
            // human.render()
            humanIntervalIdA = setInterval(() => {
                human.position.x = human.position.x - 1

                human.render()
            }, 1)
        }
            humanKeyPressed[3] = key
    }

    document.onkeyup = function (event) {
        const upKey = event.key

        switch (upKey) {
            // T-REX -------------------------
            case 'w': clearInterval(tRexIntervalIdW)
                tRexKeyPressed[0] = null
                break

            case 'd': clearInterval(tRexIntervalIdD)
                tRexKeyPressed[1] = null
                break

            case 's': clearInterval(tRexIntervalIdS)
                tRexKeyPressed[2] = null
                break

            case 'a': clearInterval(tRexIntervalIdA)
                tRexKeyPressed[3] = null
                break
            // HUMAN --------------------
            case 'ArrowUp': clearInterval(humanIntervalIdW)
                humanKeyPressed[0] = null
                break

            case 'ArrowRight': clearInterval(humanIntervalIdD)
                humanKeyPressed[1] = null
                break

            case 'ArrowDown': clearInterval(humanIntervalIdS)
                humanKeyPressed[2] = null
                break

            case 'ArrowLeft': clearInterval(humanIntervalIdA)
                humanKeyPressed[3] = null
        }

    }
    if ((human.position.x < tRex.position.x + 15 && human.position.x > tRex.position.x - 15) &&
    (human.position.y < tRex.position.y + 15 && human.position.y > tRex.position.y - 15)) {
    alert('te han comido')
    
    clearInterval(humanIntervalIdW)
    clearInterval(humanIntervalIdD)
    clearInterval(humanIntervalIdS)
    clearInterval(humanIntervalIdA)

    clearInterval(tRexIntervalIdW)
    clearInterval(tRexIntervalIdD)
    clearInterval(tRexIntervalIdS)
    clearInterval(tRexIntervalIdA)

    humanKeyPressed = []
    tRexKeyPressed = []

    tRex.move(50, 50)   
    tRex.render()

    human.move(90, 90)
    human.render()
}

    // if(human.position.x === tRex.position.x && human.position.y === tRex.position.y) alert('te han comido')
}

