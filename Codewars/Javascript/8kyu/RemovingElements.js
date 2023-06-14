const ChallengeName = 'RemovingElements'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;

/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/


function removeEveryOther(arr){
    arr = arr.flat()
    const arr2 = []
    for(let i =0 ; i<arr.length; i++) {
        if (i%2 == 0) {
            arr2.push(arr[i])
        }
    }
    console.log(arr2)
  }


removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])
// ,['Hello', 'Hello Again']);
removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// ,[1, 3, 5, 7, 9]);
removeEveryOther([[1, 2]])
// , [[1, 2]]);
removeEveryOther([['Goodbye'], {'Great': 'Job'}])
// ,[['Goodbye']]);