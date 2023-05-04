const ChallengeName = 'SumOfPositives'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


// You get an array of numbers, return the sum of all of the positives ones.



function positiveSum(arr) {
    let answer = 0
  for(let i=0; i<arr.length; i++) {
    // console.log(arr[i])
    if (arr[i] >= 0) {
     answer += arr[i] 
    } 
  }
  console.log(answer)
}


positiveSum([1,-4,7,12])