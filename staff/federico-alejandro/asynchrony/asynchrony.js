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






 hola
 ciao
 pryvit

konichiwa
privet
hello
czesc