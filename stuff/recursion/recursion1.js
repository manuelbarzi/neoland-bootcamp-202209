// CASE: queremos imprimrir individualmente cada uno de los elementos de la array
var a = [10, 20, 30, 40, 50]

function printArray (array){
    for (var i = 0; i < array.length; i++){
        var element = array[i]

        console.log(element)
    }
}

printArray(a)

// CASE: La array contine dentro una array y queremos que devuelva todos los elementos 
var b = [10, 20, 30, [100, 200, 300, 400, 500], 40, 50]

function printElement(array){

    for(var i = 0; i < array.length; i++){
        var elem = array[i]

        if (elem instanceof Array){
            for (var j = 0; j < elem.length; j++){
                var elem2 = elem[j]

                console.log(elem2)
            }
        } else console.log(elem)
    }
}

// CASE: Si la array empieza a contener dentro de ella varios niveles de array devería llamar de nueva a la misma función para que lo ejecute las veces que haga falta y así no tener que escribir la funcion for por cada nivel de profundidad
var c = [10, 20, 30, [100, 200, 300, 400, [1000, 2000, 3000, 4000, [10000, 20000, 30000, 40000, 50000], 5000], 500], 40, 50]

function printArraysElements (array){

    for (var i = 0 ; i < array.length; i++){
        var element = array[i]

        if (element instanceof Array){
            printArraysElements(element)
        } else console.log (element)
    }
}