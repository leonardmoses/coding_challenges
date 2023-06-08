const ChallengeName = 'RockPaperScissors'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Let's play! You have to return which player won! In case of a draw return Draw!.
*/

// const rps = (p1, p2) => {

//     switch (p1 == 'rock') {
//         case p2 == 'scissors':
//             // getMsg(1);
//             console.log("P1 Wins!")
//         case p2 == 'paper':
//             // getMsg(2);
//             console.log("P2 Wins!")
//         case p2 == 'rock':
//             console.log('Draw!');
//     }
//     switch (p1 == 'paper') {
//         case p2 == 'rock':
//             // getMsg(1);
//             console.log("P1 Wins!")
//         case p2 == 'scissors':
//             // getMsg(2);
//             console.log("P2 Wins!")
//         case p2 == 'paper':
//             console.log('Draw!')
//     }
//     switch (p1 == 'scissors') {
//         case p2 == 'paper':
//             // getMsg(1);
//             console.log("P1 Wins!")
//         case p2 == 'rock':
//             // getMsg(2);
//             console.log("P2 Wins!")
//         case p2 == 'scissors':
//             console.log('Draw!')
//     }
// };


const rps = (p1, p2) => {

    const getMsg1 = 'Player1 won!'
    const getMsg2 = 'Player2 won!' 
    const getMsg3 = 'Draw!'

    if (p1 == 'rock' && p2 == 'paper') {
        console.log(getMsg2)
    } else if (p1 == 'rock' && p2 == 'scissors') {
        console.log(getMsg1)
    } else if (p1 == 'paper' && p2 == 'rock') {
        console.log(getMsg1)
    } else if (p1 == 'paper' && p2 == 'scissors') {
        console.log(getMsg2)
    } else if (p1 == 'scissors' && p2 == 'rock') {
        console.log(getMsg2)
    } else if (p1 == 'scissors' && p2 == 'paper') {
        console.log(getMsg1)
    } else {
        console.log(getMsg3)
    }
};




rps('rock', 'scissors')
// , getMsg(1));
rps('scissors', 'paper')
// , getMsg(1));
rps('paper', 'rock')
// , getMsg(1));

rps('scissors', 'rock')
// , getMsg(2));
rps('paper', 'scissors')
// , getMsg(2));
rps('rock', 'paper')
// , getMsg(2));

rps('rock', 'rock')
// , 'Draw!');
rps('scissors', 'scissors')
// , 'Draw!');
rps('paper', 'paper')
// , 'Draw!');