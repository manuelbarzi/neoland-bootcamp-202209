//Case separator is not declared

{
const elements = ['blue', 'red', 'yellow', 'black', 'white']

let result = join(elements)

console.assert(result === 'blue,red,yellow,black,white')
}


//Case separator is empty ''

{
const elements = ['blue', 'red', 'yellow', 'black', 'white']

let result = join(elements, '')

console.assert(result === 'blueredyellowblackwhite')
}


//Case separator is empty '-'

{
    const elements = ['blue', 'red', 'yellow', 'black', 'white']
    
    let result = join(elements, '-')
    
    console.assert(result === 'blue-red-yellow-black-white')
}


//Case contains undefine value

{
    const elements = ['blue', undefined, 'yellow', 'black', 'white']
    
    let result = join(elements, '-')
    
    console.assert(result === 'blue--yellow-black-white')
}


//Case contains empty value

{
    const elements = ['blue', '', 'yellow', 'black', 'white']
    
    let result = join(elements, '-')
    
    console.assert(result === 'blue--yellow-black-white')
}


//Case contains last undefine value

{
    const elements = ['blue', 'red', 'yellow', 'black', undefined]
    
    let result = join(elements, '-')
    
    console.assert(result === 'blue-red-yellow-black')
}