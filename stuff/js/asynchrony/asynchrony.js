setTimeout(() => console.log('hello'), 5000)
setTimeout(() => console.log('konichiwa'), 0)

var before = Date.now()
while(Date.now() - before < 3000);
console.log('hola')

setTimeout(() => console.log('privet'), 1000)

var before = Date.now()
while(Date.now() - before < 3000);
console.log('ciao')

setTimeout(() => console.log('czesc'), 1000)

var before = Date.now()
while(Date.now() - before < 3000);
console.log('pryvit')






VM4021:6 hola
VM4021:12 ciao
VM4021:18 pryvit
undefined
VM4021:2 konichiwa
VM4021:8 privet
VM4021:1 hello
VM4021:14 czesc