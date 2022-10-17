// CASE 1 returns a new Array ['exuberant', 'destruction', 'present'] from the original
// ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
// conditioned by the callback function

var filArray1 = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

var filCondition1 = (word) => { return word.length > 6};

var result = filter(filArray1, filCondition1);

// CASE 1.2 returns a new Array [123, 3, 67] from the original
// ['spray', 123, 3, null, 'destruction', undefined, 67] conditioned by the
// callback function

var filArray2 = ['spray', 123, 3, null, 'destruction', undefined, 67];

var filCondition2 = (word) => { return typeof word === 'number'};

var result = filter(filArray2, filCondition2);