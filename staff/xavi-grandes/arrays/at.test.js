// array.at(index)

// CASE: when I demand index 2 the function give us the value 8 of the array.
{
const arrayAt = [5, 12, 8, 130, 44];
const indexAt = 2;

const result = at(arrayAt, indexAt)

console.assert(result === 8)
}

// CASE: when I demand index -2 the function starts from end and give us the value 130 of the array.
{
const arrayAt = [5, 12, 8, 130, 44];
const indexAt = -2;

const result = at(arrayAt, indexAt)

console.assert(result === 130)
}