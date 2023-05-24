const ChallengeName = 'FakeBinary'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/



// function fakeBin(x){
//     const array1 = x.split('')
//     const array2 = []
//     array1.forEach(i => {
//         parseInt(i)
//         i < 5 ? i = 0 : i = 1;
//         array2.push(i)
//     });
//     const array3 = array2.join('')
//     console.log(array3)
// }


//one liner
function fakeBin(x){
    console.log( x.split('').map( i => i<5? 0 : 1 ).join('') )
}


fakeBin('45385593107843568')
// , '01011110001100111');
fakeBin('509321967506747')
// , '101000111101101'); 
fakeBin('366058562030849490134388085')
// , '011011110000101010000011011');