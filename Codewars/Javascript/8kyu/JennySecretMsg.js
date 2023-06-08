const ChallengeName = 'JennySecretMsg'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?
*/

function greet(name){
    console.log( name==='Johnny'? `Hello, my love!`: `Hello, ${name}!` )
}

greet("Jim")
// , "Hello, Jim!");
greet("Jane")
// , "Hello, Jane!");
greet("Simon")
// , "Hello, Simon!");
greet("Johnny")
// , "Hello, Simon!");