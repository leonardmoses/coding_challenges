const ChallengeName = 'GetCharFromASCII'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

Example:

get_char(65)
should return:

'A'
*/


function getChar(c){
    console.log(String.fromCharCode(c))
  }



getChar(55)
// ,'7')
getChar(56)
// ,'8')
getChar(57)
// ,'9')
getChar(58)
// ,':')
getChar(59)
// ,';')
getChar(60)
// ,'<')
getChar(61)
// ,'=')
getChar(62)
// ,'>')
getChar(63)
// ,'?')
getChar(64)
// ,'@')
getChar(65)
// ,'A')