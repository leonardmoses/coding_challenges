const ChallengeName = 'SentenceSmash'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
*/

function smash (words) {
    console.log(words.join(' '))
 };


smash(["hello", "world"])
// , "hello world");
smash(["hello", "amazing", "world"])
// , "hello amazing world");
smash(["this", "is", "a", "really", "long", "sentence"])
// , "this is a really long sentence");
