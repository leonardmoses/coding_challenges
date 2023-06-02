const ChallengeName = 'FindMinMaxValues'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
*/



var min = function(list){
    
    console.log(Math.min(...list))
}

var max = function(list){
    
    console.log(Math.max(...list))
}
  


min([-52, 56, 30, 29, -54, 0, -110])
// , -110);
min([42, 54, 65, 87, 0])
// , 0);
max([4,6,2,1,9,63,-134,566])
// , 566);
max([5])
// , 5);