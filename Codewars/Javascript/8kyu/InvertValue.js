const ChallengeName = 'InvertValue'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
*/

function invert(array) {
    console.log(array.map(x => x * -1))
 }


invert([1,2,3,4,5])
// ), [-1,-2,-3,-4,-5]);
invert([1,-2,3,-4,5])
// ), [-1,2,-3,4,-5]);
invert([])
// ), []);
invert([0])
// ), [0]);