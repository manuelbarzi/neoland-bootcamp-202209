function at(text, index) {
  if (index === undefined) 
      index = 0;

  if (index < 0) 
      index = text.length + index;

  return text[index];
}
