const ChallengeName = 'ReverseStrings'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


// Complete the solution so that it reverses the string passed into it.



function solution(str){
  let reversed = ''
  reversed = str.split('').reverse().join('');
  console.log(reversed)

//   return str.split('').reverse().join('');
}


solution('Hello World')