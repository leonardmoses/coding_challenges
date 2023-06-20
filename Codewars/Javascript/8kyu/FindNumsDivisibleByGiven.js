const ChallengeName = 'FindNumsDivisibleByGiven'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
*/


function divisibleBy(numbers, divisor) {
    const array1 = []
    numbers.map(x => (x%divisor == 0 ? array1.push(x) : null))

    console.log(array1)
}



divisibleBy([1,2,3,4,5,6], 2)
// , [2,4,6]);
divisibleBy([1,2,3,4,5,6], 3)
// , [3,6]);
divisibleBy([0,1,2,3,4,5,6], 4)
// , [0,4]);
divisibleBy([0], 4)
// , [0]);
divisibleBy([1,3,5], 2)
// , []);