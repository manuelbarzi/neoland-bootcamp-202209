const elements = ["Fire", "Air", "Water"];

var result1 = join(elements);
console.assert(result1 === "Fire,Air,Water");

var result2 = join(elements, "");
console.assert(result2 === "FireAirWater");

var separator3 = "-";
var result3 = join(elements, separator3);
console.assert(result3 === "Fire-Air-Water");