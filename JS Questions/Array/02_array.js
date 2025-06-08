/* Question 2   :- Store Payment
Given a total due and an array representing the amount of change in your pocket.
determine whether or not you are able to pay for the item.
Change will always be represented in the following order: 1 coin, 22 coin, ₹5 coin, ₹10 coin
changeEnough ([25, 20, 5, 5,] 120) should yield true
----
since having 25-> ₹1 coin, 20-> ₹2 coin, 5-> ₹5 coin and 5-> ₹10 coin + gives you 25 + 40+25+50=140 

*/

 const coins =[25,20,5,5]

 const amountNeedToPay = 120

 function enoughCoin(coins, amountNeedToPay) {
    return (coins[0] + coins[1]*2 + coins[2]*5 + coins[3]*10)
 }
 console.log(enoughCoin(coins ,amountNeedToPay));



 // another method 

 /*

   const coins =[25,20,5,5]

 const amountNeedToPay = 120

  function enoughCoin(coins, amount) {

    const moneyArray = coins.map((value , i) => {
        if(i === 0){
          return value;
        }
        else if(i === 1){
            return value * 2
        }
        else if(i === 2){
            return value * 5
        }
        else {
            return value * 10
        }
    })
       console.log("moneyArray" , moneyArray);

   const totalMoney = moneyArray.reduce((prev ,curr) => prev + curr , 0)

    console.log("totalMoney" , totalMoney);
    
   
    if (totalMoney >= amount){
        return true ;
    }
    else {
        return false
    }
  }

  console.log(enoughCoin(coins ,amountNeedToPay));

  */