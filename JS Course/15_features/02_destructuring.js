//************ Destructuring in Object *****************//


const person ={
    firstname: "Abhi",
    lastname: "Verma",
    age: 22,
};

const {firstname,lastname,age} = person;    // destructuring
console.log(firstname,lastname,age);

// //Otherwise , this is lengthy method
// console.log(person.firstname,person.lastname,person.age);  



//******************** Destructuring in Array ***************//


const array1 = [1,2,3];

const [a,b,c] = array1;                          // destructuring            

console.log(a,b,c);
