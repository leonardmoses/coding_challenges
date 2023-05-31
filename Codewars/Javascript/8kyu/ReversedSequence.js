const ChallengeName = 'ReversedSequence'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/



const reverseSeq = n => {
    // console.log(n)
    const array1 = []
    for (let i = 1; i<n+1; i++) {
        array1.push(i)
    }
    array1.reverse()
    console.log(array1)
  };


reverseSeq(10)

