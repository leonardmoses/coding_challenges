const ChallengeName = 'GrasshopperGradeBook'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
*/


function getGrade (s1, s2, s3) {
    let averageScore = Math.round((s1 + s2 + s3)/3)
    let grade = 'F'
    // console.log(averageScore)
        if (averageScore <= 100 && averageScore >= 90) {
            grade = 'A'
        } else if (averageScore < 90 && averageScore >= 80) {
            grade = 'B'
        } else if (averageScore < 80 && averageScore >= 70) {
            grade = 'C'
        } else if (averageScore < 70 && averageScore >= 60) {
            grade = 'D'
        } else {
            grade = 'F'
        }

        console.log(grade)
  }

 
getGrade(95,90,93)
// , 'A')
getGrade(100,85,96)
// , 'A')
getGrade(92,93,94)
// , 'A')

getGrade(70,70,100)
// , 'B')
getGrade(82,85,87)
// , 'B')
getGrade(84,79,85)
// , 'B')
getGrade(89,89,90)
// , 'B') 

getGrade(70,70,70)
// , 'C')
getGrade(75,70,79)
// , 'C')
getGrade(60,82,76)
// , 'C')

getGrade(65,70,59)
// , 'D')
getGrade(66,62,68)
// , 'D')
getGrade(58,62,70)
// , 'D')

getGrade(44,55,52)
// , 'F')
getGrade(48,55,52)
// , 'F')
getGrade(58,59,60)
// , 'F')