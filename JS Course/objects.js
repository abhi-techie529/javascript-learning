//************** Objects ***********//

//Two methods for creating objects
// 1. const student = {};
// 2. const student = new Object();

const student = {
    roll: 55,
    firstName: "Abhimanyu",
    lastName: "Verma",
    class:"12"
}
// how to access objects

const roll = student["roll"]    // metohd 1 , to access objects
// const roll = student.roll    // metohd 1.1 , to access objects

// const fullName = student.firstName + " " + student.lastName;    // metohd 2 , to access objects

console.log(roll);
// console.log(fullName);



//********* how to create and update values on objects ****//

student.weight = "50kg";      // create values

student.roll = 50;           // update values 
// student.["roll"] = 50;           // update1.1  values 
 console.log(student);



//********** Object in another ********/
 
const addharCardData = {
    firstName1 :"rohan" ,
    lastName1: "kumar" ,
    addharNo : 23838837373,
    address: { village: "ramgarh" ,ditrict: "Hisar" ,state:"Haryana"},
    
    normalArray: ["45" , "54"],    // Array

    getFullName : function(){
        return this.firstName1 + " " + this.lastName1
    }                                           // function

}
console.log(addharCardData.address.village);  // accress object into another object 

// this => addharCardData

console.log(addharCardData.getFullName());     //for function 



//*********** Constructor Fucntion ***********//
// It start with capital letter 

function Person(firstName2 , lastName2 , age){
    this.firstName2 = firstName2,
    this.lastName2 = lastName2,
    this.age = age;
}
// we create objects using constructor  function then we need to use " new " keyword before it 

const person1 = new Person("Abhi" , "verma" ,"16");

console.log(person1);



//how to duplicate the object 
/*
const obj1 = {title: "obj1"}
const obj2 = obj1;

obj2.title = "obj2"; 

console.log("obj1 :",obj1);                  // output :- obj2
console.log("obj2 :" ,obj2);                 // output :- obj2
*/

// it gives "obj2" for both , so its not a perfect cloning , so to solve this problem we take help of " spread " opreator

// spread operator deep clone
const obj1 = {title:"obj1"}
const obj2 = {...obj1};       // spread operator (...)

obj2.title = "obj2";

console.log("obj1 :" , obj1);
console.log("obj2 :" , obj2);



//************************ Loops *********************//

// =>  for print ( key )
const student1 = {
    roll: 55,
    firstName: "Abhimanyu",
    lastName: "Verma",
    class:"12"
}
for (let key in student1){
    console.log(key);   
}


// =>  for of loop ,print values

for(let studenValue of Object.values(student1)){
    console.log(studenValue);
    
}


// =>  If we want to convert object into map , then we need to convert the object into array so =>
 
// Structure of map  (convert in array)
/* 
    [
         ["roll" , 55],            // syntax :- [ key , value]
         ["firstName" , "abhi"],
         ["lastName","verma"]
    ]    

*/

// =>  for print enteries or convert object datatype into map than we use ( Object.enteries )

for(let studenValue of Object.entries(student1)){
    console.log(studenValue);
    
}

// it will print emteries


// =>  if we want to print key and vlaues seperatly

for(let [key , value]of Object.entries(student1)){
    console.log("key" , key);
    console.log("vlaue" , value);
}


//=>  hasOwnProperty :- this is used to check that this value exist in the program of not

console.log(student1.hasOwnProperty('roll'));
// it return a boolean result ; ture , false