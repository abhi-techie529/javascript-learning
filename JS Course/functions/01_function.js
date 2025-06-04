 //********** Function **********//


 /* function calculateArea(heightValue , widthValue){
    const height = heightValue ;
    const width = widthValue;
    const area = height * width;
    console.log("Area : " , area);
    }
    calculateArea(100 , 200);
    calculateArea(300 , 400);
    calculateArea(600 , 700); */


    // ******** example of function using return ********//

/* function calculateArea(heightValue , widthValue){
 const height = heightValue ;
 const width = widthValue;
 const area = height * width;
//  console.log("Area : " , area);
  return area ; 
}
const area1 =  calculateArea(10 , 20) + 
 calculateArea(30 , 40) ;

 console.log("Area :" , area1); */


 
//*********** Default functin **********//

/*

 function calculateArea(heightValue = 1 , widthValue = 1)          // here, these are heightValue = 1 and widthValue = 1 , these are default values , if we can input any value than these default values will be print 
 {

console.log("height :" , heightValue , "width :"  , widthValue);

 const height = heightValue ;
 const width = widthValue;
 const area = height * width;
//  console.log("Area : " , area);
 return area ; 
}
const area1 =  calculateArea()         // if we can not give any value than it will print " NAN "  , if we give any vlaue here than it overwrite the default value and print the result

 console.log("Area :" , area1);
 
*/
 //************** variable scope ************//

/*
 const heightGlobal = 500 ;   // global variable 

 function calculateArea(heightValue = 1 , widthValue = 1)         
 {

console.log("height :" , heightValue , "width :"  , widthValue);

 const height = heightGlobal ;     // it can easily access the global variable , but global variable can not access the local variable
 const width = widthValue;
 const area = height * width;
//  console.log("Area : " , area);
 return area ; 
}
console.log("width :" , width);    // this will give error because , this is as  global variable , here it can not able to access the local variable ,but local variable access the global variable easily as above given 


const area1 =  calculateArea()       
 console.log("Area :" , area1);
 
 */

 //************ Anonymous Function **************//
 
 /*
 const login = function(username , paasword ){
    console.log("username :", username);
 }
 login("Abhimanyu")
*/
 // anonymous function => no name 
 //anonymous function can be used  as parameters for other function


 //*************** Callback function  **************//

 /*
 function printMessage( message , callback)   // step 2
 {
    console.log(message);                      // step 3
    callback()
 }
   function sayGoodbye()                       // step 4
   { 
    console.log("Goodbye");                    //step 5
   }

   printMessage("hello" , sayGoodbye)    // step 1

   // using anonymous function 
   printMessage("anonymous" , function(){
    console.log("this is from anonymous function");
    
   })

   */

   
   //****** IIFE (Immediately invoked function expression) *****//

   /*
   (function callAutomaticaly(){
    console.log("this is auto ");
   }) ()

    */

   // function which is called automatically that function is called IIFE function


   //********* Arrow function  **************//

   //  normal Function//
   const calculateArea = (height , width) => {
    // const area = height * width ;          // do not need to assign
    return height * width;
   }
   // arrow function //                    // this is a shortcut method to run a function , use it
     const calculateArea1 = (height , width) => height * width;

     const area1 = calculateArea1( 55 , 55);

     console.log("Area : ", area1);
     