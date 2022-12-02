function setTimeoutPromised(callback, millis) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            callback()

            resolve()
        }, millis)
    })
}

function now() { return new Date().toISOString() }

setTimeoutPromised(() => {
    console.log(10, now())
}, 1000)
    .then(() => 
        setTimeoutPromised(() => {
            console.log(20, now())
        }, 1000)    
    )
    .then(() => 
        setTimeoutPromised(() => {
            console.log(30, now())
        }, 1000)    
    )
    .then(() => 
        setTimeoutPromised(() => {
            console.log(40, now())
        }, 1000)    
    )
    .then(() => 
        setTimeoutPromised(() => {
            console.log(50, now())
        }, 1000)    
    )

console.log(60, now())

var before = Date.now()
//while (Date.now() - before < 3000);
for (;Date.now() - before < 3000;);

console.log(70, now())
VM5917:37 60 '2022-11-28T09:22:19.796Z'
VM5917:43 70 '2022-11-28T09:22:22.796Z'
undefined
VM5917:14 10 '2022-11-28T09:22:22.796Z'
VM5917:18 20 '2022-11-28T09:22:23.800Z'
VM5917:23 30 '2022-11-28T09:22:24.803Z'
VM5917:28 40 '2022-11-28T09:22:25.806Z'
VM5917:33 50 '2022-11-28T09:22:26.808Z'