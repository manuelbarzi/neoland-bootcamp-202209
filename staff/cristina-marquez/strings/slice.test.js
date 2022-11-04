var testSliceStr = 'The quick brown fox jumps over the lazy dog.';

console.assert(sliceString(testSliceStr, 31) === 'the lazy dog.');
// expected output: "the lazy dog."

console.assert(sliceString(testSliceStr, 4, 19) === 'quick brown fox ');
// expected output: "quick brown fox"