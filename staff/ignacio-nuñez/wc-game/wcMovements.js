const vaterKey = {}

document.onkeydown = function (event) {
    const key = event.key
    switch (key) {
        case 'd':
            if (!(vaterKey.d)) {
                if (vater.position.x >= 600 && vater.position.x < 620)
                    break
                vaterIntervalId = setInterval(() => {
                    if (vater.position.x >= 600 && vater.position.x < 620)
                        clearInterval(vaterIntervalId)

                    vater.move(4)
                    vaterKey.d = true
                    vater.render()
                }, 2)
            }
            break

        case 'a':
            if (vater.position.x > -10 && vater.position.x < 1)
                break
            if (!(vaterKey.a))
                vaterIntervalId2 = setInterval(() => {
                    if (vater.position.x > -10 && vater.position.x < 1)
                        clearInterval(vaterIntervalId2)

                    vater.move(-4)

                    vaterKey.a = true
                    vater.render()
                }, 2)
    }
}

document.onkeyup = function (event) {
    const key = event.key
    switch (key) {
        case 'd': clearInterval(vaterIntervalId)
            vaterKey.d = false
            break

        case 'a': clearInterval(vaterIntervalId2)
            vaterKey.a = false
    }
}