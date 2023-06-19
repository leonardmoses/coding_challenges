const ChallengeName = 'CatYearsDogYears'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/


var humanYearsCatYearsDogYears = function(humanYears) {

    let cY = 0
    let dY = 0

    if (humanYears <= 1) {
        cY = 15
        dY = 15
    } else if (humanYears <= 2) {
        cY = 24
        dY = 24
    } else {
        cY = 24 + ((humanYears-2)*4)
        dY = 24 + ((humanYears-2)*5)
    }
    
    console.log([humanYears,cY,dY])
  }


humanYearsCatYearsDogYears(1)
// , [1,15,15]);



humanYearsCatYearsDogYears(2)
// , [2,24,24]);



humanYearsCatYearsDogYears(10)
// , [10,56,64]);