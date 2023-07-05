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
    const array1 = []
    for(let i = 0; i<=(n*2)-1; i=i+2) {
        array1.push(i)
    }
    console.log('break--------------')
    console.log(array1)
    console.log(array1[n-1])
  }



nthEven(1)
// , 0, "Wrong Value!");
nthEven(2)
// , 2, "Wrong Value!");
nthEven(3)
// , 4, "Wrong Value!");
nthEven(10)
// 18
nthEven(50)
//98
nthEven(100)
//198
nthEven(1298734)
// 2597466

// nthEven(100)
// // , 198, "Wrong Value!");
// nthEven(1298734)
// // , 2597466, "Wrong Value!");