//*************** Clouser ******************//


function sum (a,b) {
    let sum = a + b;

    return function (c) {
        return sum + c;
    };
}

const sumReturnValue = sum(1,2)
console.log(sumReturnValue(5));


// if insialize value in the parent function then those value are also used in the inner another function , parent has the capability to hold the data

