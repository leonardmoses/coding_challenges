const ChallengeName = 'StingyStrings'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/


function stringy(size) {
    const array1 = []
    for(let i = 0; i<size; i++) {
        array1.push(1)
        array1.push(0)
    }
    console.log(array1.slice(0, array1.length/2).join('') )
  }



stringy(6)
// 101010
stringy(4)
// 1010
stringy(12)
// 101010101010
stringy(23)