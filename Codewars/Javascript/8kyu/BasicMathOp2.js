const ChallengeName = 'BasicMathOp2'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Note to myself: Same Challenge but play around with switch statement
*/


function basicOp(operation, value1, value2) {
    let answer = ''
    switch (operation) {
        case "+" : {
            answer = value1 + value2
            break
        }
        case "-" : {
            answer = value1 - value2
            break
        }
        case "*" : {
            answer = value1 * value2
            break
        }
        case "/" : {
            answer = value1 / value2
            break
        }
    }
    console.log(answer)
}


basicOp('+', 4, 7)
basicOp('-', 15, 18)
basicOp('*', 5, 5)
basicOp('/', 49, 7)