// Devuelve false poruqe un elemento no cumple la condicion 
var  age = [20, 30 , 12, 20]

var  isBiggerThan =  function(currentValue) {
  return currentValue > 13;
}
var res = every(age, isBiggerThan);

console.assert(res === false )

// Devuelve true porque todos los elementos cumplen con la condicion
 var age = [20, 36, 12, 30]

 var evenNumbers =  function(nums) {
  return nums < 37;
 }
 var result = every(age, evenNumbers)

 console.assert(result === true)