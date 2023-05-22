const ChallengeName = 'VowelCount'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
    const array = str.split('')
    const vowels = ['a','e','i','o','u']
    let count = 0
    array.forEach(i => {
        vowels.forEach( j => {
            j == i ? count += 1 : count += 0 ;
        });
    });
    console.log(count)
  }


getCount("abracadabra")
//   , 5)