const ChallengeName = 'CalculateBMI'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Write function bmi that calculates body mass index (bmi = weight / height^2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/



function bmi(weight, height) {
    const bmi = (weight/(height**2)).toFixed(2)
    console.log(bmi+' = BMI')
    if (bmi <= 18.5) {
        console.log('Underweight')
    } else if (bmi <= 25.0 ) {
        console.log('Normal') 
    } else if (bmi <= 30.0) {
        console.log('Overweight')
    } else {
        console.log('Obese')
    }
  }


bmi(80, 1.80)
// , "Normal");
bmi(50, 1.60)

bmi(80, 1.68)

bmi(100, 1.55)

bmi(90, 1.70)
