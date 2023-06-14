const ChallengeName = 'LogicDrillTrafficLight'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.
*/


function updateLight(current) {

    switch (current) {
        case 'green': {
            console.log('yellow')
            break;
        }
        case 'yellow': {
            console.log('red')
            break;
        }
        case 'red': {
            console.log('green')
        }
    }
  }
 

updateLight("green")
// , "yellow");
updateLight("yellow")
// , "red");
updateLight("red")
// , "green");