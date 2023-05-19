const ChallengeName = 'GrasshopperSummation'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
*/

var summation = function (num) {
    let answer = 0
    for(let i=1 ; i<num + 1; i++) {
        // console.log(i)
        answer += i
    }
    console.log(answer)
  }


summation(1)
// 1
console.log('break')
summation(2)
// 3
console.log('break')
summation(8)
// 36
