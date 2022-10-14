// sintaxis text.repeat(number)

function repeat(string, count) {
    var result = '';
  
    if (count < 0 || count === Infinity) return new RangeError('Invalid count value: ' + count);
  
    // if (count === count/number)
    // return new Error('RangeError')
  
    // if (count === Number.number)
    // return first number
  
    count = Math.floor(count)
  
    for (var i = 0; i < count; i++) {
      result = result + string;
    }
    return result;
  }