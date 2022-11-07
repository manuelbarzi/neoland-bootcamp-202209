// Descripción:
// va a verificar si en el array hay algun
// elemento que cumpla con la condicion que le he pasado.
// syntaxis: arr.some(callback(element[, index[, array]])[, thisArg])

// parametros de entrada:
// primer parametro sera array y sera de tipo array
// segundo parametro sera callback y sera de tipo funcion

// valor de retorno: 
// devuelve un booleano (true o false)

function some(array, callback) {
    for(var i = 0; i < array.length; i++) {
        var element = array[i]
        
var returnCallbackValue = callback(element)
        if( returnCallbackValue)

        return true 
    }

    return false

}

// function some(array, callback){
//     for(var i = 0; i < array.length; i++){
//        var element = array[i]

//      var returnCallbackValue = callback(element)

//      if(returnCallbackValue)

//      return true
// }
// return false
// }