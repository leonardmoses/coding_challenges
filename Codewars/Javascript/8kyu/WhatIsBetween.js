const ChallengeName = 'WhatIsBetween'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
*/


function between(a, b) {
    const array1 = []
    for(let i=a; i<=b; i++) {
        array1.push(i)
    }
    console.log(array1)
  }



 between(1, 4)
//  , [1, 2, 3, 4]));
between(-2, 2)
// , [-2, -1, 0, 1, 2]));