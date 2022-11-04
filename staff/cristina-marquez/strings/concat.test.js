var concatStringsResult = null

//CASE returns 'Hello world' for 'Hello' 'World' ' '

concatStringsResult = concatStrings('Hello', 'World', ' ')
console.assert(concatStringsResult === 'Hello World')

//CASE returns 'Hello, world' for 'Hello' 'world' ', '

concatStringsResult = concatStrings('Hello', 'world', ', ')
console.assert(concatStringsResult === 'Hello, world')

