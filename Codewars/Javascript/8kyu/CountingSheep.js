const ChallengeName = 'CountingSheep'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).


function countSheeps(arrayOfSheep) {
    let counter = 0
    for (let i=0; i<arrayOfSheep.length; i++) {
        // if(arrayOfSheep[i] == true) {
        //     counter +=1 
        // } 

        arrayOfSheep[i] == true ? counter += 1 : counter += 0
    }
    console.log(counter)
  } 


countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true])