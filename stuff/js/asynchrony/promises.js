function delay1s(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(callback())
        }, 1000)
    })
}

delay1s(() => console.log(1))
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


VM922:20 a
VM922:22 b
VM922:24 c
undefined
VM922:9 1
VM922:10 2
VM922:11 3
VM922:12 4
VM922:13 5
VM922:14 6
VM922:15 7
VM922:16 8
VM922:17 9
VM922:18 10