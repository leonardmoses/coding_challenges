const ChallengeName = 'DisemvowelTrolls'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

function disemvowel(str) {
    const vowels = ['a','e','i','o','u','A','E','I','O','U']
    const strArray = str.split('')
    const strArray2 = []

    strArray.forEach(i => {
        if ( !vowels.includes(i)) {
            strArray2.push(i)
        } 
    });

    console.log(strArray2.join(''))
    
    }
   


disemvowel("This website is for losers LOL!")
// , "Ths wbst s fr lsrs LL!")
disemvowel("No offense but,\nYour writing is among the worst I've ever read")
// , "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
disemvowel("What are you, a communist?")
// , "Wht r y,  cmmnst?")