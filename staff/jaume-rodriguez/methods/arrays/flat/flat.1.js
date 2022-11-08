function flat(array, depth = 1) {
    if (depth === 0) {
        return array
    }
    var result = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (!(element instanceof Array)) {
            result[result.length] = element;
            continue;
        }
        const flatenedSubArray = flat(element, depth - 1);
        /* ---entrando a contexto--- */

        for (let j = 0; j < flatenedSubArray.length; j++) {
            result[result.length] = flatenedSubArray[j]
        }
    }
    return result;
}

/* Como programar casos recursivos
1. Identificar casos Bases y resolverlos
2. Dividir en problemas más sencillos
3. Una vez dividido en problemas sencillos y has obtenidos
resultados independientes ( pequeños ), los unimos */