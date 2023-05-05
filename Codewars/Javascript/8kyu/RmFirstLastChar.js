const ChallengeName = 'RemoveFirstLastChar'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.



function removeChar(str){
    let array1 = str.split('')
    array1.shift()
    array1.pop()
    str = array1.join('')
    console.log(str)
    // return str

    // console.log(str.slice(1, -1))
    // return str.slice(1, -1);
    
   };


   removeChar('hello')
   removeChar('Hello World')
   removeChar('DragonBallZ')
