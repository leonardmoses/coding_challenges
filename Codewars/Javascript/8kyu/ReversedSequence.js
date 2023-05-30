const ChallengeName = 'ReversedSequence'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/



const reverseSeq = n => {
    console.log(n)
    const array = [n]
    for (let i = 0; i<n; i++) {
        array.push(n -= 1)
    }
    array.push(1)

    console.log(array)
  };


reverseSeq(5)
// , [5, 4, 3, 2, 1]);
