// case value 2

{
const array1 = [5, 12, 8, 130, 44];

const index = 2;

let testAt = at(array1, index);

console.assert(testAt === 8);
}


// case value -2

{
const array1 = [5, 12, 8, 130, 44];

const index = -2;

let testAt = at(array1, index);

console.assert(testAt === 130);
}


// case value -10

{
const array1 = [5, 12, 8, 130, 44];

const index = -10;

let testAt = at(array1, index);

console.assert(testAt === undefined);
}


// case value 10

{
    const array1 = [5, 12, 8, 130, 44];
    
    const index = 10;
    
    let testAt = at(array1, index);
    
    console.assert(testAt === undefined);
}


// case value 'a'

{
    const array1 = [5, 12, 8, 130, 44];
    
    const index = 'a';
    
    let testAt = at(array1, index);
    
    console.assert(testAt === 5);
}