const ChallengeName = 'GetMiddleCharacter'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
*/

// // one liner
// function getMiddle(s) {
//     console.log(s.length < 2? s : s.length/2 == Math.floor(s.length/2) ? s[(s.length/2)-1]+s[(s.length/2)]: s[Math.floor(s.length/2)])
// }

function getMiddle(s) {
    const middle = s.length/2

    if (s.length % 2 == 0) {
        // console.log('even')
        console.log(s.slice(middle-1,middle+1))
    } else {
        // console.log('odd')
        console.log(s.slice(Math.floor(middle),Math.ceil(middle)))
    }
}



getMiddle("test")
// ,"es");
getMiddle("testing")
// ,"t");
getMiddle("middle")
// ,"dd");
getMiddle("A")
// ,"A");