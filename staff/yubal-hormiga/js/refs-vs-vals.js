
// x = 10
// 10
// y = 20
// 20
// z = x + y
// 30
// y  = 21
// 21
// z
// 30
// z = x + y
// 31
// o = new Object
// {}
// o = {}
// {}
// o = new Object
// {}
// o.name = 'Peter'
// 'Peter'
// x.name = 'Wendy'
// 'Wendy'
// x
// 10
// x.name
// undefined
// p.name = 'James'
// VM2623:1 Uncaught ReferenceError: p is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM2623:1
// o.surname = 'Pan'
// 'Pan'
// p = 0
// 0
// p = o
// {name: 'Peter', surname: 'Pan'}
// p.name = 'Wendy'
// 'Wendy'
// o
// {name: 'Wendy', surname: 'Pan'}
// p
// {name: 'Wendy', surname: 'Pan'}
// v = x
// 10
// q = {} // new Object
// {}
// q.name = 'James'
// 'James'
// q.surname = 'Hook'
// 'Hook'
// o.enemy = q
// {name: 'James', surname: 'Hook'}
// o
// {name: 'Wendy', surname: 'Pan', enemy: {…}}
// p
// {name: 'Wendy', surname: 'Pan', enemy: {…}}
// q
// {name: 'James', surname: 'Hook'}
// o.enemy.age = 40
// 40
// q
// {name: 'James', surname: 'Hook', age: 40}
// q.age = 45
// 45
// o.enemy.age
// 45
// p.enemy.age
// 45
// function hello() {
//     console.log('Hello!')
// }
// undefined
// hello()
// VM4050:2 Hello!
// undefined
// hello.num = 10
// 10
// hello
// ƒ hello() {
//     console.log('Hello!')
// }
// hello.num
// 10
// q.salute = hello
// ƒ hello() {
//     console.log('Hello!')
// }
// p.enemy.salute()
// VM4050:2 Hello!
// undefined
// q
// {name: 'James', surname: 'Hook', age: 45, salute: ƒ}
// p
// {name: 'Wendy', surname: 'Pan', enemy: {…}}enemy: {name: 'James', surname: 'Hook', age: 45, salute: ƒ}name: "Wendy"surname: "Pan"[[Prototype]]: Object
// o.enemy.salute()
// VM4050:2 Hello!
// undefined
// p.enemy.salute.age = z
// 31
// x === 10
// true
// p === q
// false
// o === p
// true