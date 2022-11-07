const array1 = [1, 4, 9, 16];

const arrayMappeado = map(array1, function (number) {
  return number * 2;
});

console.assert(arrayMappeado.length === 4);
console.assert(arrayMappeado[0] === 2);
console.assert(arrayMappeado[1] === 8);
console.assert(arrayMappeado[2] === 18);
console.assert(arrayMappeado[3] === 32);
console.assert(array1[0] === 1);
console.assert(array1[1] === 4);
console.assert(array1[2] === 9);
console.assert(array1[3] === 16);
