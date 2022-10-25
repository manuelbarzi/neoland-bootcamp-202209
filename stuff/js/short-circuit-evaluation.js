var left = () => {
    console.log('left')

    return true
}

var right = () => {
    console.log('right')

    return false
}

left() || right()

VM2204:2 left
true

//

var left = () => {
    console.log('left')

    return true
}

var right = () => {
    console.log('right')

    return false
}

left() && right()

VM1831:3 left
VM1831:9 right
false

//

const left = () => {
    console.log('left')

    return false
}

const right = () => {
    console.log('right')

    return true
}

left() && right()

VM2412:2 left
false

//

const left = () => {
    console.log('left')

    return false
}

const right = () => {
    console.log('right')

    return true
}

left() || right()

VM2656:2 left
VM2656:8 right
true