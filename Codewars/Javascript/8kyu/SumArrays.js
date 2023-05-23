const ChallengeName = 'SumArrays'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
*/

function sum (numbers) {
    let sum = 0
    numbers.map(i => sum += i)
    console.log(sum)
};
  


sum([])
// , 0);
sum([1, 5.2, 4, 0, -1])
// , 9.2);
