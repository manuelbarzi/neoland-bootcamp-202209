//CASE

const animals = ['dolphin', 'tiger', 'cat', 'horse', 'tiger']

// on element found
var result1 = indexOf(animals, "tiger");
console.assert(result1 === 1);

// positive fromIndex version
var result2 = indexOf(animals, "tiger", 2);
console.assert(result2 === 4);

// on not element found
var result3 = indexOf(animals, "giraffe");
console.assert(result3 === -1);



// negative fromIndex version
var result4 = indexOf(animals, "tiger", -3);
console.assert(result4 === 4);