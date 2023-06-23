const ChallengeName = 'UnfinishedLoopBugging'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Unfinished Loop - Bug Fixing #1
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
*/


function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    
    console.log(newArray)
  }




createArray(1)
// ,[1]);
createArray(2)
// ,[1,2]);
createArray(3)
// ,[1,2,3]);
createArray(4)
// ,[1,2,3,4]);
createArray(5)
// ,[1,2,3,4,5]);



