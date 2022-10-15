var  age = [20, 30 , 12, 20]

var  isBiggerThan =  function(currentValue) {
  return currentValue > 13;
}
var res = every(age, isBiggerThan);

console.assert(res === false )
