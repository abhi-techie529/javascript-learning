//************* Nullish Coalescing Operator( ?? )****************//

// const person ={
//   name:"Abhi",
//   address: {
//     city: "NewYork"
//   }
// };

// console.log(person.address?.state ?? "This is default value");   //( ?? ):- it is use to set a default value ,if it can not return any value , than default value will be return



//************* Nullish Coalescing assignment( ??= )****************//

// It is used to assign default value to a variable only if its current value is null undefined

// let address = null;

// address ??= "Hisar";

// console.log(address);






//******************** Void Operator *************//

// It evaluates the given expression and return "undefined" basiclly is " lock " the expression 

function sum(a,b) {
    return a + b;
}

const result = void sum (7,4);             // it lock the expression , it can not give any output

console.log(result);

