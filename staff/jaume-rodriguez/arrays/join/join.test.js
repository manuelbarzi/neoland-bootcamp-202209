// CASE 1 returns 'a,b,c' as a new unique string with commas between

var jArray1 = ['a', 'b', 'c']

var result = join(jArray1)

// CASE 2 returns 'abc' as a new unique string without commas

var jArray2 = ['a', 'b', 'c']

var result = join(jArray2, '')

// CASE 2.1 returns 'a-b-c' as a new unique string with - between

var jArray3 = ['a', 'b', 'c']

var result = join(jArray3, '-')

// CASE 2.2 returns 'a + b + c' as a new unique string 
// with space and + between

var jArray4 = ['a', 'b', 'c']

var result = join(jArray4, ' + ')

// CASE 3 returns 'a,,c' as a new unique string without commas

var jArray5 = ['a', , 'c']

var result = join(jArray5)

// CASE 3.1 returns 'a,,c' as a new unique string without commas

var jArray6 = ['a', undefined, 'c']

var result = join(jArray6)