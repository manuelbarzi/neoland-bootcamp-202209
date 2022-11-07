function map(array, callback){
   var result = [] // creada para guardar el nuevo array

   for(var i = 0; i < array.length; i++) {
      var element = array[i]; // creada para guardar elemento producto de iterar en el for pasado por el callback

      var returnCallbackValue = callback(element); // creada para guardar elemento resultado del callback

      result[result.length] = returnCallbackValue
   }
   return result
}