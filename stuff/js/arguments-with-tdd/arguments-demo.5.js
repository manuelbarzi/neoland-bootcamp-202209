function hello(name1, name2, name3, name4) {
    var result = 'hello ' + name1 + ', ' + name2 + ', ' + name3 + ', ' + name4+'!' 
    
    
    console.log(result)
}


// CASE 1
hello('A', 'B', 'C')
// 'hello A, B, C!'

// CASE 2
hello('D', 'E', 'F')
// 'hello D, E, F!'

// CASE 3
hello('D', 'E', 'F', 'G')
// 'hello D, E, F, G!'

// CASE 4
hello('D', 'E', 'F', 'G', 'H')
// 'hello D, E, F, G, H!'
VM264:5 hello A, B, C, undefined!
VM264:5 hello D, E, F, undefined!
VM264:5 hello D, E, F, G!
VM264:5 hello D, E, F, G!
undefined