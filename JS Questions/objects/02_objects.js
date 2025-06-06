// split income into 50-30-20 strategy

const earning = 50000;

const percentageOfAmount = (amount , percentage) => {
    return (amount * percentage)/100 ;
}

const fiftyThirtyTwenty = (amount) => {
    return {
        need: percentageOfAmount(earning ,50),
       wants: percentageOfAmount(earning ,30),
        savings: percentageOfAmount(earning ,20)
    }
}

console.log(fiftyThirtyTwenty(earning));


// outout :- { need: 25000, wants: 15000, savings: 10000 }