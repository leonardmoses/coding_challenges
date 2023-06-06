const ChallengeName = 'CantSleepCountSheep'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

var countSheep = function (num){
    array1 = []
    for (let i = 1; i<=num; i ++) {
        array1.push(`${i} sheep...`)
    }

    console.log(array1.join(''))
  }


  
countSheep(0)
// , "");
countSheep(1)
// , "1 sheep...");
countSheep(2)
// , "1 sheep...2 sheep...");
countSheep(3)
// , "1 sheep...2 sheep...3 sheep...");
