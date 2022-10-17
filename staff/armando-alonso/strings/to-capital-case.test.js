// Case returns 'Arman' for string 'arman' {happy path}

var name = "neoland";
var test = capitalCase(name);

console.assert(test === "Neoland");


// Case send a number {happy path}

var test = capitalCase(-5);

console.assert(test instanceof Error)
console.assert(test.message == "This value is not a string")


// Case send a string with fist character === a space  {happy path}

var name = " neoland";
var test = capitalCase(name);

console.assert(test === "Neoland");


// Case send a string with fist character === uppercase  {happy path}

var name = "Neoland";
var test = capitalCase(name);

console.assert(test instanceof Error)
console.assert(test.message == 'This word starts with capital case')


// Case send a string with fist character === special  {happy path}

var name = "$eoland";
var test = capitalCase(name);

console.assert(test instanceof Error)
console.assert(test.message == "This word starts with special char")


// Case send a string with fist character === special  {happy path}

var name = "";
var test = capitalCase(name);

console.assert(test instanceof Error)
console.assert(test.message == "Send a word")

