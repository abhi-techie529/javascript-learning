//********** Loops ***************//

//********* while loop  ************//

let i = 1;
 while(i < 10){
    console.log("print i: ", i);
    i++;  
 }
 console.log("*************");
 
 //******* do while loop **********//

 let j = 12;
 
 do{
    console.log("print j :",j);
    j++;
 }
 while(j < 10);
console.log("***************");

 // do while statement not generally used , it runs at leat once that is the property of do while statememt

 //********** for loop *************//

 let k = 1;

 for( k =1; k < 10 ; k++)           // here we can also able to change the final expression like: ,(k++) we can change it into (k +=2 ) , this print only odd nubers
    {
    console.log("print k : ", k);
    
 }

 // for loop another example //
  let l = 1;
   for( l = 1; l < 1000; l++){
    if(l % 5 ===0){
        
            if( l === 20){
                continue
            }                      // by using continue statement , it skip the value and return to the loop again , and than work , but in case of " break " it will close the loop
        
        console.log("print l:",l);
    }
    if(l > 50){
        break;
    }
   }
    
