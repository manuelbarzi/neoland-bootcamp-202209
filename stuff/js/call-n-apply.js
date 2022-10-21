console.log('hola')
VM18419:1 hola
undefined
console.log.call(null, 'hola')
VM18521:1 hola
undefined
console.log.apply(null, ['hola'])
VM18607:1 hola
undefined
Function.prototype
ƒ () { [native code] }
console.dir(Function.prototype)
VM18746:1 ƒ anonymous()apply: ƒ apply()arguments: (...)bind: ƒ bind()call: ƒ call()caller: (...)constructor: ƒ Function()length: 0name: ""toString: ƒ toString()Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()get arguments: ƒ ()set arguments: ƒ ()get caller: ƒ ()set caller: ƒ ()[[FunctionLocation]]: ​[[Prototype]]: Object[[Scopes]]: Scopes[0]
undefined
function fun() {}
undefined
var fun = new Function
undefined
fun.call
ƒ call() { [native code] }
fun.apply
ƒ apply() { [native code] }
alert('hola')
undefined
alert.call(null, 'hola')
undefined
alert.apply(null, ['hola'])
undefined
alert.apply(null, { 0: 'hola', length: 1 })
undefined