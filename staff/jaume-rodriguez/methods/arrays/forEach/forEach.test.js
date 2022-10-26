// CASE 1 returns all elements from the array separated each in a new string

var feArray1 = [18, 32, 25];

var feCondition1 = (element) => {
  console.log(element);
};

var result = forEach(feArray1, feCondition1);

var trabajadores = []

var recluta = (element) => {
  if (element > 18) {
    trabajadores.push(element)
  };
};

console.log(trabajadores)
forEach(feArray1, recluta)
console.log(trabajadores)