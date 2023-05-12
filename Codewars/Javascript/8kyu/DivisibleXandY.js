const ChallengeName = 'Divisible by X and Y'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.
*/


function isDivisible(n, x, y) {
    console.log( n%x === 0 && n%y ===0 ? true : false );
}


isDivisible(3,3,4)
// false
isDivisible(12,3,4)
// true
isDivisible(8,3,4)
// false
isDivisible(48,3,4)
// true