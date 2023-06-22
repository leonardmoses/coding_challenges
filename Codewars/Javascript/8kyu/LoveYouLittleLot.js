const ChallengeName = 'LoveYouLittleLot'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.
*/


function howMuchILoveYou(nbPetals) {
    let answer = ''
    let number = 1

    if(nbPetals <= 6) {
        number = nbPetals
    } else if (nbPetals%6 == 0) {
        number = nbPetals%6 + 6
    } else {
        number =  nbPetals%6
    }

    switch (number) {
        case 1: {
            answer = "I love you"
            break
        }
        case 2: {
            answer = "a little"
            break
        }
        case 3: {
            answer = "a lot"
            break
        }
        case 4: {
            answer = "passionately"
            break
        }
        case 5: {
            answer = "madly"
            break
        }
        case 6: {
            answer = "not at all"
            break
        }
        
    }
    console.log(answer)
}




howMuchILoveYou(7)
// ,"I love you")
howMuchILoveYou(3)
// ,"a lot")
howMuchILoveYou(6)
// ,"not at all")

howMuchILoveYou(1)
howMuchILoveYou(2)
howMuchILoveYou(3)
howMuchILoveYou(4)
howMuchILoveYou(5)
howMuchILoveYou(6)
howMuchILoveYou(7)
howMuchILoveYou(8)
howMuchILoveYou(9)
howMuchILoveYou(10)
howMuchILoveYou(11)
howMuchILoveYou(12)
howMuchILoveYou(13)





