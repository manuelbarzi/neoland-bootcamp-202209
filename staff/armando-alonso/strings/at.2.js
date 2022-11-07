function at(sentence, index) {
  var element;

  if (index < 0) {
    element = sentence.length;

    element = element + index;

    element = sentence[element];

    return element;
  } else
    for (let i = 0; i < sentence.length; i++) {
      element = sentence[i];

      if (i === index) {
        return element;
      }
    }
}
