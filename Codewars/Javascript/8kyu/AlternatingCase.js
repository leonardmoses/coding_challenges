const ChallengeName = 'AlternatingCase'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.
*/


String.prototype.toAlternatingCase = function () {
    const str = this.valueOf()
    const str2 = []
    console.log(str)

    str.split('').map(x => x === x.toUpperCase()? str2.push(x.toLowerCase()) : str2.push(x.toUpperCase()))

    console.log(str2.join(''))
  }


"hello world".toAlternatingCase()
//  "HELLO WORLD");
"HELLO WORLD".toAlternatingCase()
//  "hello world");
"hello WORLD".toAlternatingCase()
//  "HELLO world");
"HeLLo WoRLD".toAlternatingCase()
//  "hEllO wOrld");
"12345".toAlternatingCase()
//  "12345");
"1a2b3c4d5e".toAlternatingCase()
//  "1A2B3C4D5E");
"String.prototype.toAlternatingCase".toAlternatingCase()
//  "sTRING.PROTOTYPE.TOaLTERNATINGcASE");
"Hello World".toAlternatingCase()
//  "Hello World");