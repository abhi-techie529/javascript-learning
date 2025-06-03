// Give a number n calculate the factorial of the number 

// factorial of , 4 = 4*3*2*1  = 24
// factorial fo , 3 = 3*2*1 = 6

const inputNumber = 4;
let i = 1;
let result = 1;
// result = 1 * 1 = 1
// result = 1 * 2 = 2
// result = 2 * 3 = 6
// result = 6 * 4 = 24
for( i = 1; i <= inputNumber ; i++){
    result = result * i ;
}
console.log("factorail of " + inputNumber + " = ",result);

// output :- 24 