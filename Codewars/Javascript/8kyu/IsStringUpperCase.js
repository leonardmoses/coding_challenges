const ChallengeName = 'IsStringUpperCase'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
*/


const isUpperCase = function(str) {
    console.log(str == str.toUpperCase() ? true : false )
  }





isUpperCase('c')
// , false, 'c is not upper case');
isUpperCase('C')
// , true, 'C is upper case');
isUpperCase('hello I AM DONALD')
// , false, 'hello I AM DONALD not is upper case');
isUpperCase('HELLO I AM DONALD')
// , true, 'HELLO I AM DONALD is upper case');
isUpperCase('ACSKLDFJSgSKLDFJSKLDFJ')
// , false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case');
isUpperCase('ACSKLDFJSGSKLDFJSKLDFJ')
// , true, 'ACSKLDFJSGSKLDFJSKLDFJ is upper case');
