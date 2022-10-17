// CASE: we select 2 string ('Hello' and 'World') to be concatenated with a space as 'Hello World'

var str1 = 'Hello';
var str2 = 'World';

var result1 = concat(str1, str2)
console.assert (result1 === 'HelloWorld')

// CASE: we select 3 string ('Hello','World' and 'Xavi') to be concatenated with a space as 'Hello World Xavi'

var str1 = 'Hello';
var str2 = 'World';
var str3 = 'Xavi';

var result1 = concat(str1, ' ', str2, ' ', str3)
console.assert (result1 === 'Hello World Xavi')

// CASE: we select 2 string ('Hello' and 'Xavi') to be concatenated with a space as 'Hello World Xavi'

var str1 = 'Hello';
var str2 = 'World';
var str3 = 'Xavi';

var result1 = concat(str1,' ', str3)
console.assert (result1 === 'Hello Xavi')