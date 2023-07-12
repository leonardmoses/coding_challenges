const ChallengeName = 'NoZerosForHeros'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway
*/


function noBoringZeros(n) {

    let num = 0
    
    if(n < 0 ) {
        num = -1 * parseInt(parseInt(n.toString().split('').reverse().join('')).toString().split('').reverse().join(''))
    } else {
        num = parseInt(parseInt(n.toString().split('').reverse().join('')).toString().split('').reverse().join(''))
    }
    

    console.log(num)
  }



noBoringZeros(1450)
// , 145)
noBoringZeros(960000)
// , 96)
noBoringZeros(1050)
// , 105)
noBoringZeros(-1050)
// , -105)
noBoringZeros(-105)
// , -105)
noBoringZeros(0)
// , 0)
