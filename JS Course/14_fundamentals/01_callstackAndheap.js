//***********/ call stack + memory heap **********************//


//**************** Memory Heap *********************//

// const number = 610;       // allocate memory for number 

// const human = {
//     name: "Abhimanyu Verma "       // allocate memory for human object
// };


//************** Callstack ****************//

// const sum = (a , b) => {
//     return a + b;
// };

// const calculate = () => {
//     const result = sum(2 ,3);
//     return result;
// };
// debugger;
// calculate();




//*************** Scope *****************/



//*********** */ => Global Scope *********// global scope :- A variable declared outside of any function can be accessed from anywhere in the program



// let a = 1;

// function logMe(){
//     console.log(a);
    
// }
// logMe();


 
//************** function scope *****************/ function scope :- A variable declared inside  a function has function scope and can only be accessed within that function , as well as any nested functions.

// function logMe(){
//     let message = "hello abhi";
//     console.log(message);
// }
// logMe();



//**************** block scope  ***************// block scope :- A variable declared inside a block such as conditional statement or a loop, has block scope and can only be accessed within that block.

{         //---------->   inside block
    let message = "Hello Abhi"
    console.log(message);
}        //---------->   inside block
