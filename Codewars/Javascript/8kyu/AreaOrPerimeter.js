const ChallengeName = 'AreaOrPerimeter'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.
*/


const areaOrPerimeter = function(l , w) {
    console.log( l==w ? l*w : (l*2)+(w*2))
  };

 
areaOrPerimeter(3,  3)
// ,  9);
areaOrPerimeter(6, 10)
// , 32);