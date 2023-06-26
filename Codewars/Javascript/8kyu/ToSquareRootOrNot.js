const ChallengeName = 'ToSquareRootOrNot'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
*/


function squareOrSquareRoot(array) {

    const array2 = []
    array.forEach(x => {
        if ( x%(Math.sqrt(x)) == 0 ) {
            array2.push(Math.sqrt(x))
        } else {
            array2.push(x**2)
        }
        
    });

    console.log(array2) 
  }




squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ])
// [ 2, 9, 3, 49, 4, 1 ]

squareOrSquareRoot([ 100, 101, 5, 5, 1, 1 ])
// [ 10, 10201, 25, 25, 1, 1 ]

squareOrSquareRoot([ 1, 2, 3, 4, 5, 6 ])
// [ 1, 4, 9, 2, 25, 36 ]