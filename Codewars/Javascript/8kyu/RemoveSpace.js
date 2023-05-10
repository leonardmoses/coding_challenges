const ChallengeName = 'RemoveString'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


// Write a function that removes the spaces from the string, then return the resultant string.


function noSpace(x){

    const array = x.split('')
    console.log(array)
    // array.forEach(element => {
    //     if (element === ' ') {
    //         element = ''
    //     }
    // });

    for (let i=0; i<array.length; i++) {
        if (array[i] === ' ' ) {
            array[i] = ''
        }
    }

    const array2 = array.join()
    console.log(array2)
}


noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')
noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd')
noSpace('8aaaaa dddd r     ')