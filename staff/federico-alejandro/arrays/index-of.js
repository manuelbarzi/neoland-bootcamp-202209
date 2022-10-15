function indexOf(array, searchElement, fromIndex = 0) {
  var result = "";
// fromIndex por defecto tiene valor 0, salvo que le indique desde que posicion empezar    
// valor negativo pero no supera la longitud del array, se le asigna el valor de la longitud y le sumo el fronIndex (-3)
    if (fromIndex < 0) {
    fromIndex = array.length + fromIndex;
//si fromIndex es negativo y supera la longitud del array, le asigno el valor 0
    if (fromIndex < 0) {
      fromIndex = 0;
    }
  }

  for (var i = fromIndex; i < array.length; i++) {
    if (array[i] === searchElement) {
      return i;
    }
  }
  return -1;
}
