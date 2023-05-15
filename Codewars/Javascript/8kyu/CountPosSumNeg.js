const ChallengeName = 'CountPosSumNeg'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
*/

function countPositivesSumNegatives(input) {
    const arrayPos = []
    const arrayNeg = []
    let countPos = 0
    let sumNeg = 0
    let answer = []
    input.forEach(element => {
        if(element >= 0) {
            arrayPos.push(element)
        } else {
            arrayNeg.push(element)
        }
    });
    console.log(arrayPos)
    console.log(arrayNeg)

    arrayPos.forEach(element => {
        countPos = arrayPos.length
    });
    
    arrayNeg.forEach(element => {
        sumNeg += element
    })
    
    answer.push(countPos)
    answer.push(sumNeg)
    console.log(answer)
  }


countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])
