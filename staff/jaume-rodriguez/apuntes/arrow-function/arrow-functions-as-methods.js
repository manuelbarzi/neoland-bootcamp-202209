// As stated previously, arrow function expressions are best suited for non-method functions.

// Arrow functions do not have their own this. Another example involving Object.defineProperty()

// Because a class's body has a this context, arrow functions as class fields close over the class's
// this context and the this inside the arrow function's body will correctly point to the instance (or the class itself, for static fields).
// However, because it is a closure, not the function's own binding, the value of this will not change based on the execution context.

class Feeling {
    a = 'yes';
    love = () => {
        console.log(this.a);
    }
}

const jaume = new Feeling();
jaume.love(); // yes
const { love } = jaume;
love(); // yes
// If it were a normal method, it should be undefined in this case

//Arrow function properties are often said to be "auto-bound methods", because the equivalent with normal methods is:
class Feeling {
    a = 'yes';
    constructor() {
        this.method = this.method.bind(this);
    }
    method() {
        console.log(this.a);
    }
}

// The call, apply and bind methods are NOT suitable as arrow functions – as they were designed to allow methods to execute within different scopes –
// because arrow functions establish this based on the scope the arrow function is defined within.

// Arrow functions do not have their own arguments object.
// Thus, in this example, arguments is a reference to the arguments of the enclosing scope: 
const arguments = [1, 2, 3];
const arr = () => arguments[0];

arr(); // 1

function foo(n) {
    const f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
    return f();
}

foo(3); // 3 + 3 = 6
