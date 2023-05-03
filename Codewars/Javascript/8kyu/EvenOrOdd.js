const ChallengeName = 'EvenOrOdd'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.



function evenOrOdd(number) {
   console.log(number)
   if (number%2 == 0) {
    console.log("even")
   } else {
    console.log("odd")
   }

//    return number%2 == 0 ? "even" : "odd"
}


evenOrOdd(6)
