function at(sentence, index) {
  var element;

    for (let i = 0; i < sentence.length; i++) {
      element = sentence[i];

      if (i === index) {
        return element;
      }
    }
}
