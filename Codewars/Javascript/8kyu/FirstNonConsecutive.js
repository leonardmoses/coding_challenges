const ChallengeName = 'FirstNonConsecutive'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null.

The array will always have at least 2 elements and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

Can you write a solution that will return null for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

*/

function firstNonConsecutive (arr) {
    // console.log(arr)
    const answer = []
    for (let i = 0; i<=arr.length; i++) {
        // console.log(arr[i]+1)
        // console.log(arr[i+1])
        if (arr[i]+1 !== arr[i+1]) {
            answer.push(arr[i+1])
        }
        
    }
    console.log(answer[0] == undefined ? null : answer[0])
}

 
firstNonConsecutive([1,2,3,4,6,7,8])
  
firstNonConsecutive([1,2,3,4])

firstNonConsecutive([3,4,5,6,7,8,9,11,12])
