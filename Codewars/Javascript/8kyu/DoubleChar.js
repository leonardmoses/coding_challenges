const ChallengeName = 'DoubleChar'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;

/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/


function doubleChar(str) {
    console.log( str.split('').map(x => x+x).join('') )
  }


doubleChar("abcd")
// , "aabbccdd");
doubleChar("Adidas")
// , "AAddiiddaass");
doubleChar("1337")
// , "11333377");
doubleChar("illuminati")
// , "iilllluummiinnaattii");
doubleChar("123456")
// , "112233445566");
doubleChar("%^&*(")
// , "%%^^&&**((");