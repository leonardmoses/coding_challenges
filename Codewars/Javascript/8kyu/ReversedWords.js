const ChallengeName = 'ReversedWords'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.
*/



function reverseWords(str){
    console.log( str.split(' ').reverse().join(' '))
  }


reverseWords("hello world!"                 )
// ,  "world! hello")
reverseWords("yoda doesn't speak like this" )
// ,  "this like speak doesn't yoda")
reverseWords("foobar"                       )
// ,  "foobar")
reverseWords("kata editor"                  )
// ,  "editor kata")
reverseWords("row row row your boat"        )
// ,  "boat your row row row")
reverseWords(""                             )
// ,  "")
