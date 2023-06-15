const ChallengeName = 'Cockroach'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:
1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
*/


function cockroachSpeed(s) {
    //conversion: 1km/1hr = 27.777778cm/1s
    const conversion = 27.777778
    console.log( Math.floor(s*conversion))
  }


cockroachSpeed(1.08)
// , 30);
cockroachSpeed(1.09)
// , 30);
cockroachSpeed(0)
// , 0);