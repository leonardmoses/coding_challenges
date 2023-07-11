const ChallengeName = 'WolfInSheepsClothing'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.

Examples
Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"
*/


function warnTheSheep(queue) {
    queue.reverse()
    console.log( queue[0] == 'wolf' ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${queue.indexOf('wolf')}! You are about to be eaten by a wolf!` )
}



warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]);
// "Oi! Sheep number 2! You are about to be eaten by a wolf!"

warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]);
// "Oi! Sheep number 5! You are about to be eaten by a wolf!"

warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]);
// "Oi! Sheep number 6! You are about to be eaten by a wolf!"

warnTheSheep(["sheep", "wolf", "sheep"]);
// "Oi! Sheep number 1! You are about to be eaten by a wolf!"

warnTheSheep(["wolf"]);
// "Pls go away and stop eating my sheep"

warnTheSheep(["sheep", "sheep", "wolf"]);
// "Pls go away and stop eating my sheep"
