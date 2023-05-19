const ChallengeName = 'CenturyFromYear'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Given a year, return the century it is in.
*/

function century(year) {
    console.log(year)
    console.log( Math.ceil(year/100) )
    
    // console.log( year%2 > 0 ? Math.floor(year/100 + 1)  : Math.floor(year/100)  )
    
    // if (year%2===0) {
    //     console.log(Math.floor(year/100))
    // } else if (year=) {
        
    // } else {
    //     console.log( (Math.floor(year/100)) + 1)
    // }

  }


century(1705)
// 18
century(1900)
// 19
century(1601)
// 17
century(2000)
// 20
century(89)
// 1
century(405102)
// 4052

//Edge Case: Testing for year 405102: expected 4051 to equal 4052