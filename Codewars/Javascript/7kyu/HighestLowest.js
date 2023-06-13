const ChallengeName = 'HighestLowest'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
*/


function highAndLow(numbers){
    const array1 = numbers.split(' ')
    array1.sort( (a,b) => a-b)
    console.log(array1.at(-1).concat(' ',array1[0]))
  }
 

highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")
// , "42 -9");

highAndLow("1 2 3")
// , "3 1");