// CASE 1 returns

const gArray1 = [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
    { name: 'bananas', type: 'fruit', quantity: 0 },
    { name: 'goat', type: 'meat', quantity: 23 },
    { name: 'cherries', type: 'fruit', quantity: 5 },
    { name: 'fish', type: 'meat', quantity: 22 }
];

let gCondition1 = (element) => {
    return element.type === 'fruit'
}

let conclusion = group(gArray1, gCondition1)