const ChallengeName = 'NameShuffler'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/


function nameShuffler(str){
    console.log(str.split(' ').reverse().join(' '))
  }


nameShuffler('john McClane')
// ,'McClane john');
nameShuffler('Mary jeggins')
// ,'jeggins Mary')
nameShuffler('tom jerry')
// ,'jerry tom')