const ChallengeName = 'IfElseTernary'
let title = document.querySelector('#title');
title.innerHTML= ChallengeName;


/* 
Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.
*/


function saleHotdogs(n){
    console.log(n < 5 ? n*100 : n >=5 && n < 10 ? n*95 : n >= 10 ? n*90 : 0 )
  }



saleHotdogs(  1)
// ,  100);
saleHotdogs(  4)
// ,  400);
saleHotdogs(  5)
// ,  475);
saleHotdogs(  9)
// ,  855);
saleHotdogs( 10)
// ,  900);
saleHotdogs(100)
// , 9000);