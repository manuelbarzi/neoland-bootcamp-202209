const orderedArray = [30, 50, 20, 90, 10];

const shuffledArray = orderedArray.shuffle();

console.assert(orderedArray.length === 5);
console.assert(orderedArray[0] === 30);
console.assert(orderedArray[1] === 50);
console.assert(orderedArray[2] === 20);
console.assert(orderedArray[3] === 90);
console.assert(orderedArray[4] === 10);

console.assert(shuffledArray instanceof Array);
console.assert(shuffledArray.length === 5);
console.assert(shuffledArray.includes(30));
console.assert(shuffledArray.includes(50));
console.assert(shuffledArray.includes(20));
console.assert(shuffledArray.includes(90));
console.assert(shuffledArray.includes(10));
