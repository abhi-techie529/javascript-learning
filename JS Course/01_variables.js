//***** Data types ********//

var myTotalMarks = 85.86;   // number
var myTotalMarks2 = "86";   // string
var name = "Anshu Raj";     // string
var iamDeveloper = false;   // boolean 
var carname;                // undefined

console.log(carname);

var myObject = {
    name : false ,                 // key : value
    myname: "Abhimanyu"
}                                  // object 
 console.log(myObject);
 
 var myArray = [1,0,"name"];         // array
 console.log(myArray);
 
 var map = new Map([[ false,"Abhimanyu"]])   // map just like a object 
 console.log(map);
 
 var newset = new Set([0,0,0,1,1,1])    // set , it remove the repeated values
 console.log(newset);
 


 //*************** var , let , const  **********//

 const accountId = 1344;
 let accountEmail = "abhi@gmail.com"
 var accountPassword = "123445"
         accountCity = "jaipur" 

//  accountId = 2     // not allowed to be changed because its constant 
 accountEmail = "ak@gmail.com"
 accountPassword = " 1111"
 accountCity = " Banglore"

console.table([accountId,accountEmail,accountPassword,accountCity])
 