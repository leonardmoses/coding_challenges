const ChallengeName = 'PlayingBanjo'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!
*/

// function areYouPlayingBanjo(name) {
//     console.log( name[0].toUpperCase() === 'R' ? `${name} plays banjo` : `${name} does not play banjo` );
// }

function areYouPlayingBanjo(name) {
    const array1 = name.toUpperCase().split('');
    console.log(array1.includes('R') ? `${name} plays banjo` : `${name} does not play banjo`);
}


areYouPlayingBanjo("Adam")
// , "Adam does not play banjo");
areYouPlayingBanjo("Paul")
// , "Paul does not play banjo");
areYouPlayingBanjo("Ringo")
// , "Ringo plays banjo");
areYouPlayingBanjo("bravo")
// , "bravo does not play banjo");
areYouPlayingBanjo("rolf")
// , "rolf plays banjo");