function hello() {
    console.log(this)
}

hello()
// window

window.hello()
// window

this.hello()
// window


var o = {}

o.hello = hello

o.hello()
// { hello }

console.log(window.hello === o.hello)

// VM5024:2 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// VM5024:2 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// VM5024:2 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// VM5024:2 {hello: ƒ}
// VM5024:22 true