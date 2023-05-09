const ChallengeName = 'SquareSum'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


// Complete the square sum function so that it squares each number passed into it and then sums the results together.



function squareSum(numbers){
    let summed = 0
    for(let i=0; i<numbers.length; i++) {
        summed += (numbers[i]**2)
        // (numbers[i]**2) + summed
    }
    console.log(summed)
}


squareSum([1, 2, 2])

