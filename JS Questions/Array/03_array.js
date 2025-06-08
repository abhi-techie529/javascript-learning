// // factorial of number usring reduce method in array

const fact = 4;
function factorial(num) {
    const value = new Array(num)
    .fill(1)
    .map((value , i) => value * i + 1)
    .reduce((prev , curr) => prev * curr , 1);
     
    return value;

}

console.log("Factorial of " , fact , "=" , factorial(fact));
