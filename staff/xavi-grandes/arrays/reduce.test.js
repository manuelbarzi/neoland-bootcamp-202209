
const ArrayNumberToReduce = [1, 2, 3, 4, 5]

// crear un callback que me recoja el valorAnterior y lo sume al valorActual
function sumElements(valorAnterior, valorActual){
    return valorAnterior + valorActual
}

result = reduce(ArrayNumberToReduce, sumElements)

console.assert(result === 15)

