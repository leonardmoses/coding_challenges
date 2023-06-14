const ChallengeName = 'SetAlarm'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;

/*
Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true
*/


function setAlarm(employed, vacation){
    console.log( employed ? (vacation ? false : true) : false )
}


setAlarm(true, true)
// ,  false,"Should be false.");
setAlarm(false,true)
// ,  false, "Should be false.");
setAlarm(true, false)
// , true,"Should be true.");