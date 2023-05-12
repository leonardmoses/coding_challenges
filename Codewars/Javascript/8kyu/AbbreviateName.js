const ChallengeName = 'AbbreviateName'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

Note: Make sure to account for lowercase. Answers have to all be uppercase.
*/


function abbrevName(name){

    //brute force
    myArray = name.split(' ')
    myArray2 = []
    myArray.forEach(element => {
        myArray2.push(element[0])
        myArray2.push('.')
    });
    myArray2.pop()
    myArray2 = myArray2.join('').toUpperCase()

    console.log(myArray2)

    //// shorter code
    // name = name.toUpperCase().split(' ');
    // console.log(name[0][0] + '.' + name[1][0])
    
}


abbrevName("Sam Harris")
// , "S.H");
abbrevName("Patrick Feenan")
// , "P.F");
abbrevName("Evan Cole")
// , "E.C");
abbrevName("P Favuzzi")
// , "P.F");
abbrevName("David Mendieta")
// , "D.M")