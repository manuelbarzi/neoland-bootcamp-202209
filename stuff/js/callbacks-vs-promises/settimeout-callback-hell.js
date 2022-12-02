function now() { return new Date().toISOString() }

setTimeout(() => {
    console.log(10, now())

    setTimeout(() => {
        console.log(20, now())
    
        setTimeout(() => {
            console.log(30, now())
        
            setTimeout(() => {
                console.log(40, now())
            
                setTimeout(() => {
                    console.log(50, now())                    
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)    
}, 1000)

console.log(60, now())

var before = Date.now()
//while (Date.now() - before < 3000);
for (;Date.now() - before < 3000;);

console.log(70, now())
VM2822:23 60 '2022-11-28T09:04:26.628Z'
VM2822:29 70 '2022-11-28T09:04:29.628Z'
undefined
VM2822:4 10 '2022-11-28T09:04:29.628Z'
VM2822:7 20 '2022-11-28T09:04:30.633Z'
VM2822:10 30 '2022-11-28T09:04:31.633Z'
VM2822:13 40 '2022-11-28T09:04:32.637Z'
VM2822:16 50 '2022-11-28T09:04:33.637Z'