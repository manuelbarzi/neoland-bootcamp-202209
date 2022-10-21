function indexOf(array, element, indexFrom = 0) {
  var result = -1

  if (indexFrom < 0) {
    indexFrom = indexFrom + array.length
  }

  for (var i = indexFrom; i < array.length; i++) {

    if (array[i] === element) {
      result = i
    }
  }
  return result
}