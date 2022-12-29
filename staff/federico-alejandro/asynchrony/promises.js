function delay1s(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(callback())
        }, 1000) // resuelvo lo que devuelve el callback (resolve)
    }) 
}

delay1s(() => console.log(1)) //promesas ayudan a ver el codigo de forma lineal, ocupando menos lineas y queda mejor
 .then(() => delay1s(() => console.log(2)))
 .then(() => delay1s(() => console.log(3)))
 .then(() => delay1s(() => console.log(4)))
 .then(() => delay1s(() => console.log(5)))
 .then(() => delay1s(() => console.log(6)))
 .then(() => delay1s(() => console.log(7)))
 .then(() => delay1s(() => console.log(8)))
 .then(() => delay1s(() => console.log(9)))
 .then(() => delay1s(() => console.log(10)))

console.log('a')

console.log('b')

console.log('c')
// se resuelven primero los console.log y luego la funcion 

a
b
c

1
2
3
4
5
6
7
8
9
10