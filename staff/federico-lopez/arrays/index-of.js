function indexOf(array, searchElement, fromIndex = 0) {
  for (var i = fromIndex; i < array.length; i++) {
    if (array[i] === searchElement) {
      return i;
    }
  }

  return -1;

  //   var index = -1;

  //   for (var i = fromIndex; i < array.length && index === -1; i++) {
  //     if (array[i] === searchElement) {
  //       index = i;
  //     }
  //   }

  // return index
}
