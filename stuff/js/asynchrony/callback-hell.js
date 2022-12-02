function delay1s(callback) {
    setTimeout(callback, 1000)
}

delay1s(() => {
    console.log(1)

    delay1s(() => {
        console.log(2)

        delay1s(() => {
            console.log(3)

            delay1s(() => {
                console.log(4)
            
                delay1s(() => {
                    console.log(5)
            
                    delay1s(() => {
                        console.log(6)

                        delay1s(() => {
                            console.log(7)
                        
                            delay1s(() => {
                                console.log(8)
                        
                                delay1s(() => {
                                    console.log(9)

                                    delay1s(() => {
                                        console.log(10)
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

console.log('a')

console.log('b')

console.log('c')


VM142:45 a
VM142:47 b
VM142:49 c
undefined
VM142:6 1
VM142:9 2
VM142:12 3
VM142:15 4
VM142:18 5
VM142:21 6
VM142:24 7
VM142:27 8
VM142:30 9
VM142:33 10