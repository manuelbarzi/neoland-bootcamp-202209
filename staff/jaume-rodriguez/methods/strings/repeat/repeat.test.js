// CASE 1 returns "hola mundo, hola mundo, " for the string "hola mundo, " being repeat 2 times

var string = "hola mundo, "

var result = repeat(string, 2)

// CASE 2 returns a RangeError when the count is negative

var string = "hola mundo, "

var result = repeat(string, -2)

// CASE 3 returns rounding down "hola mundo, hola mundo, " when count is a decimal 2.5

var string = "hola mundo, "

var result = repeat(string, 2.5)

// CASE 4 returns a RangeError when the count is infinity

var string = "hola mundo, "

var result = repeat(string, 1/0)