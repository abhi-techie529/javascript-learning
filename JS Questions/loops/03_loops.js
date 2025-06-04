// write a table for 19 using loop

const  tableNumber = parseInt(prompt("Enter table number"));   // parsInt convert the string into integer , typeof chnaged from string to number  // prompt :- it  instructs the browser to display a dialog with an optional message prompting the user to input some text
let i = 1 ; 

console.log(typeof tableNumber);

for(i = 1 ; i <= 10 ; i++){
    console.log(`${tableNumber} X ${i} =  ${i * tableNumber}`);
    
}