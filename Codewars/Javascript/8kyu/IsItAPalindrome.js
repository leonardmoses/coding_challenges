const ChallengeName = 'IsItAPalindrome'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Write a function that checks if a given string (case insensitive) is a palindrome. A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama".
*/


function isPalindrome(x) {
    console.log(x.toLowerCase() == x.toLowerCase().split('').reverse().join(''))
  }



isPalindrome("a")
// , true));
isPalindrome("aba")
// , true));
isPalindrome("Abba")
// , true));
isPalindrome("hello")
// , false));
isPalindrome("Bob")
// , true));
isPalindrome("Madam")
// , true));
isPalindrome("AbBa")
// , true));
isPalindrome("")
// , true));