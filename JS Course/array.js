//******************* Array ******************//


//  syntax:- const arrayName = [];



const evenNumber = [2,4,6,8,10,"Abhi" , true]   // we can add in array numbers, string , boolean


//************* CURD(Create Update Read Delete) Operation Array *********//

//=> CREATE :- 

// const days = [];

// # .push() :- it is used to add elements at the end of the array

//  days.push("Sunday")

 
// # .unshift() :- it is used to add element at the starting of the array

/*
 days.unshift("Monday" ,"Tuesday","wednesday")
   console.log(days);
*/

 // => READ :-

 const days = [
    "Monday" ,
    "Tuesday",
    "wednesday",
    "Sunday"
 ]

//   console.log(days[0]);

// => UPDATE :-

days[3] ="sun"
// console.log(days);  //output :- [ 'Monday', 'Tuesday', 'wednesday', 'sun' ]

// => DELETE :-

//# .pop() :- it is used to remove the last elemment of the array

days.pop()
// console.log(days);   //output:- [ 'Monday', 'Tuesday', 'wednesday' ] , sunday it removed


// # .shift() :- it is used to remove the first element from the array

days.shift()
console.log(days);   //output:-  [ 'Tuesday', 'wednesday' ]  , "Monday" is removed




//********* Slice and Splice *************//


// 1) .splice() :- it is used to remove the desired element from the array, it modify the original array

const numbers = [
    ,1,2,3,4,5,6,7,8,9,10
]

// numbers.splice(4,6);    

// ex:- splice(4,6) , here (value1 , value2) ; value1 :- idex from where to start deleting ; value2:- how many elements want to delete from the index

// console.log(numbers);   // output :- [ 1, 2, 3, 4 ]



// 2) .slice() :- it is used to remove the element from the array , it can not modify the original array

const sliceNumbers = numbers.slice(1,3); 
console.log(sliceNumbers); 


//********** Filter  **************//

// Filter:- We can remove elements using condition 

 const days1 = [
    "Monday" ,
    "Tuesday",
    "wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
 ]

 const filterDay = days1.filter((value , index , array) => {

    return value.length > 6;

 });
 console.log(filterDay);         //output :- [ 'Tuesday', 'wednesday', 'Thursday', 'Saturday' ]



 //************** Loops over array **************//

 //******** for loop **************//
/*

 for(let i = 0 ; i<= days1.length - 1; i++){
    console.log(`Today is ${days1[i]}`);
    
 }

 */


 //*************** for - of loop **************// 

 // use this method instead of simple for loop , its fast and short method  ; ***** shorter than simple for loop
/* 

 for (let day of days1){
    console.log(`Today is ${day}`);
 }
 
 */



 //************* forEach loop ***********//

 // shorter than for-of loop , use this instead of for-of loop

//  days1.forEach((day ,index ) => {
//         console.log(`Today is ${day} , ${index}`);
//  })    // printing of index is optional



 //************* Map /loop/ ************//
// forEach loop do not return anything but ( map ) returns values , so this is the difference between forEach and Map loop
 
 const newdays = days1.map((day ,index ) => {
        console.log(`Today is ${day} , ${index}`);

        return day[0]
 })

 console.log(newdays);   
  /*
   it returns data in the form of array
   output:- [
  'M', 'T', 'w',
  'T', 'F', 'S',
  'S'
    ] 
  
    */



    // ************ Arrays other method ************//

    //********** Find method ( .find() ) */
    const array1 = [33,12,8,133,44 ,8]

    const found = array1.find((value , index , obj) => {
        return value > 8
    })
    console.log(found);      // output :- 33
 
    /*
    What does .find() do?

    The .find() method goes through the array from left to right (index 0 → last).

    It returns the first element that satisfies the condition inside the callback function.

    As soon as it finds a match, it stops searching.
 */


    //************** indexOf  *****************//

    // const index = array1.indexOf(8)  // it gives index 2
   

    // if any duplicacy occurs than 
    const index = array1.indexOf(8 ,4)  // it gives index 5 ,because we tell them that we want index number  near by 4 , so than it gives (5) output

    console.log(index);
    

    //********** findIndex **************//
    // it help us to put logic get the output indexof can not give us  this benefit


       const array2 = [1,1,3,7,5,6]
    const index1 = array2.findIndex((value) => {
           if (value % 2 === 0)
        {
            return value
        } 
    })
    console.log(index1);
    

    //********** concat :- if we want to add two array *********//

    const array3 = ["a" ,"b" ,"c"];
    const array4 = ["e" ,"f" ,"g"];

    const newArray = array3.concat(array4 , array3);

    console.log(newArray);



    //********* at :- used to return the element *********//

    const hero = ["saktiman","ironman","krrish","spiderman"]

    let index4 = 2 ;

    console.log(`using an index of ${index4} the item returended is ${ hero.at(index4)}`);
    
    



    //********** Array checker method **********//


    // ***********EVERY **************//

    // => EVERY :- condition should be applied on all of the element of the array 

    const array5 = [2,3,4,45,42,57]
    console.log(array5.every((value) => {
        return value < 50;
    })
);   // output :- false


//********** some ************//

// in this if any one condition is satisfy than it returns true

    const array6 = [2,3,4,45,42,57,45]
    console.log(array6.some((value) => {
        return value < 50;
    })
);   // output :- true

//********* INCLUDE  ************//
//=> include :- it is used to check that element is exist in the array or not its include or not 

console.log(array6.includes(45));   // output :- true

//if any duplucacy occurs than 
console.log(array6.includes(45,5));  //we use this (value , index)




//************ REDUCE *********//

const array7 = [1,2,3,4]

const sum = array7.reduce((previousValue , currentValue) => {
    return previousValue + currentValue
}, 0)      // here 0, is the previousValue , we can alos apply different operation like - ,% ,* ;

console.log(sum);


 
//***************** sort  *********************//

//it sort serieswise , like according to character , number :- serialwise

const months = ["march","dec","feb","jan"]
const num  =[1,10000,32,21,5]

console.log(months.sort());

console.log(num.sort((a,b) => a - b));   // it gives output according to ascending order

// console.log(num.sort((a,b) => b - a));   // it gives output according to decending order


//******************* JOIN  ******************//

// it seprate the values in the elements according to given input

const elements = ["fire","water","air","soil","cloud"]
const date =[12,10,2025]

console.log(elements.join("-"));
console.log(date.join("/"));


//**************** FLAT **********//

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]