const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

console.log(materials.map((material) => material.length));
// expected output: Array [8, 6, 7, 9]

// Traditional Anonymous Function
(function (a) {
    return a + 100;
});

// Arrow Function Break Down
// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
    return a + 100;
};

// 2. Remove the body braces and word "return" — the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
(a) => a + 100;

// The { braces } and ( parentheses ) and "return" are required in some cases.
//For example, if you have multiple arguments or no arguments, you'll need to re-introduce parentheses around the arguments:
// Traditional Anonymous Function
(function (a, b) {
    return a + b + 100;
});

// Arrow Function
(a, b) => a + b + 100;

const a = 4;
const b = 2;

// Traditional Anonymous Function (no arguments)
(function () {
    return a + b + 100;
});

// Arrow Function (no arguments)
() => a + b + 100;

// Likewise, if the body requires additional lines of processing, you'll need to re-introduce braces PLUS the "return" (arrow functions do not magically guess what or when you want to "return"):
// Traditional Anonymous Function
(function (a, b) {
    const chuck = 42;
    return a + b + chuck;
});

// Arrow Function
(a, b) => {
    const chuck = 42;
    return a + b + chuck;
};

// And finally, for named functions we treat arrow expressions like variables: 
// Traditional Function
function bob(a) {
    return a + 100;
}

// Arrow Function
const bob2 = (a) => a + 100;


