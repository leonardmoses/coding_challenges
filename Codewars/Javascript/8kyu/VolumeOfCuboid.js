const ChallengeName = 'VolumeOfCuboid'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.
*/


class Kata {
    static getVolumeOfCuboid(length, width, height) {
      console.log(length*width*height)
    }
  }



Kata.getVolumeOfCuboid(1,2,2)
// ,  4);
Kata.getVolumeOfCuboid(6,2,5)
// , 60);