const ChallengeName = 'BasicMathOp'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
*/


function basicOp(operation, value1, value2)
{
  switch(operation) {
    case "+" : {
        console.log(value1 + " Plus " + value2)
        console.log(value1 + value2)
        break
    }
    case "-" : {
        console.log(value1 + " minus " + value2)
        console.log(value1 - value2)
        break
    }
    case "*" : {
        console.log(value1 + " mutliply " + value2)
        console.log(value1 * value2)
        break
    }
    case "/" : {
        console.log(value1 + " divide " + value2)
        console.log(value1 / value2)
        break
    }
    default:
        console.log("other operation")
  }
}


basicOp('+', 4, 7)
basicOp('-', 15, 18)
basicOp('*', 5, 5)
basicOp('/', 49, 7)