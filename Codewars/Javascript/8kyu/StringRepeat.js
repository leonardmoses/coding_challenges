const ChallengeName = 'StringRepeat'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.



function repeatStr (n, s) {
    array = []
    let string = ''
    for(let i=0; i<n; i++) {
        array.push(s)
        string = array.join('')
    }
    console.log(string)
  }


repeatStr(3, "*")
repeatStr(5, "#")
repeatStr(2, "ha ")
