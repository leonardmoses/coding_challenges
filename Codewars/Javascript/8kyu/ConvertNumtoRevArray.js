const ChallengeName = 'ConvertNumtoRevArray'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
*/

function digitize(n) {
    console.log(n)
    array = n.toString().split('').reverse()
    array2 = []
    array.forEach(element => {
        array2.push(parseInt(element))
    });
    // console.log(array)
    console.log(array2)
  }


digitize(35231)
//   [1,3,2,5,3]);
digitize(0)
//   ,[0]);
