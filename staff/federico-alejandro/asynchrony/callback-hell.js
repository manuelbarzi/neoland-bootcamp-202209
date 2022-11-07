function delay1s(callback) {
    setTimeout(callback, 1000) //lo pone en cole despues de un segundo. permite seguir trabajando sin bloquear
}   
 // tareas asincronas 
delay1s(() => { //despues de un segundo, muestra esto...asi por cada console.log
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

console.log('a') // se ejecutan primero y luego las callbacks que estan en cola 

console.log('b')

console.log('c')


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