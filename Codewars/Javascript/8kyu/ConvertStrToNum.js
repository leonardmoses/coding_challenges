const ChallengeName = 'Convert a String to Number'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
*/


const stringToNumber = function(str){
    console.log(parseInt(str))
  }


 stringToNumber("1234")
 stringToNumber("605")
 stringToNumber("1405")
 stringToNumber("-7")
