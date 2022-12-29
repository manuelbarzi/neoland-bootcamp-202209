function repeat(string, count) {
  var result = "";

  if (count < 0 || count === Infinity)
    return new RangeError("invalid count value: " + count);
  
    // Math.floor redondea un número hacia abajo hasta el próximo número entero
  count = Math.floor(count);

  for (var i = 0; i < count; i++) {
    result = result + string;
  }

  return result;
}
