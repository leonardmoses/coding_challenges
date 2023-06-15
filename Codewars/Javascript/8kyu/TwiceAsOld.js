const ChallengeName = 'TwiceAsOld'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
*/


function twiceAsOld(dadYearsOld, sonYearsOld) {
    console.log(Math.abs(dadYearsOld-sonYearsOld-sonYearsOld))
  }



twiceAsOld(36,7)
//  , 22);
twiceAsOld(55,30)
//  , 5);
twiceAsOld(42,21)
//  , 0);
twiceAsOld(22,1)
//  , 20);
twiceAsOld(29,0)
//  , 29);