function at(sentence, index) {

if (typeof sentence !== 'string') throw new Error('Please, the sentence should be an string')


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
