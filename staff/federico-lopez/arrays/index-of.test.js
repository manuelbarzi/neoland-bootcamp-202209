const beasts = ["ant", "bison", "camel", "duck", "bison"];

var result1 = indexOf(beasts, "bison");
console.assert(result1 === 1);

var result2 = indexOf(beasts, "bison", 2);
console.assert(result2 === 4);

var result3 = indexOf(beasts, "giraffe");
console.assert(result3 === -1);
