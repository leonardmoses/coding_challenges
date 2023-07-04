const ChallengeName = 'GetNthEvenNum'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Return the Nth Even Number

Example(Input --> Output)

1 --> 0 (the first even number is 0)
3 --> 4 (the 3rd even number is 4 (0, 2, 4))
100 --> 198
1298734 --> 2597466
The input will not be 0.
*/


function nthEven(n){
    for(let i = 0; i<n; i=i+2) {
        console.log(i)
    }
    console.log('break--------------')
  }


nthEven(1)
// , 0, "Wrong Value!");
nthEven(2)
// , 2, "Wrong Value!");
nthEven(3)
// , 4, "Wrong Value!");

// nthEven(100)
// // , 198, "Wrong Value!");
// nthEven(1298734)
// // , 2597466, "Wrong Value!");