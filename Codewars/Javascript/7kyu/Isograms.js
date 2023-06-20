const ChallengeName = 'Isograms'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/


function isIsogram(str){
    console.log(str)
    const array1 = str.toLowerCase().split('')
    const array2 = []
    console.log(array1.length)


    for(let i=0; i<array1.length; i++) {
        
        for (let j=0; j<array1.length; j++) {
            console.log(`${array1[i]} ----- ${array1[j]}`)
            if (array1[i] === array1[j]) {
                array2.push(array1[i])
            }

        }
    }

    console.log(array1)
    console.log(array2)
  }



// isIsogram("Dermatoglyphics")
// // , true );
// isIsogram("isogram")
// // , true );
// isIsogram("aba")
// , false, "same chars may not be adjacent" );
isIsogram("moOse")
// , false, "same chars may not be same case" );
// isIsogram("isIsogram")
// // , false );
// isIsogram("")
// // , true, "an empty string is a valid isogram" );