const ChallengeName = "FindThePosition";
let title = document.querySelector("#title");
title.innerHTML = ChallengeName;

/* 
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/

function position(letter){
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const position = alphabet.indexOf(letter.toUpperCase()) +1
    console.log(`Position of alphabet: ${position}`)
    }
  

position("a")
// ,"Position of alphabet: 1");
position("z")
// ,"Position of alphabet: 26");
position("e")
// ,"Position of alphabet: 5");