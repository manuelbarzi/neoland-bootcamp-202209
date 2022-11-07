function at(string, index) {
  if (index === undefined)
      index = 0

  if (index < 0)
      index = string.length + index

  return string[index]
}
