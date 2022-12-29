function substring(string, indexStart, indexEnd) {
  result = "";

  if (indexStart < 0);
  indexStart = 0;

  if (!indexEnd) indexEnd = string.length;

  if (indexStart > indexEnd) {
    var index = indexStart;
    indexStart = indexEnd;
    indexEnd = index;
  }

  for (var i = indexStart; i < indexEnd; i++) {
    var res = string[i];

    result = result + res;
  }
  return result;
}
