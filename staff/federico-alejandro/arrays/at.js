function at(array, index = 0) {
  if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
  
  if (index < 0)
    index = array.length + index

  return array[index]
}
