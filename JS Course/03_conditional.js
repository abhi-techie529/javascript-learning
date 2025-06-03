//**************** Conditional Statements *************//

//********** If statement  ************//

const marks = 91 ;

if(marks > 90){
    console.log("you are topper");
}                           // here, if marks > 90 than , it will print the value otherwise it do not print anything.        

//********** if-else statement  *************//

const score = 85;

if(score > 90){
    console.log("Topper");
}
else{
    console.log("Average student ");
}                             // if-else , we use this statement when we want to check two conditions 

//*************** else-if ************//

const scores = 60;

if(scores > 90){
    console.log("Grade : A ");
}
else if (scores > 80){
    console.log("grade : B");
}
else if(scores >= 60){
    console.log("grade : C ");
}
else if(scores > 35){
    console.log("grade : D");
}
else {
    console.log("Fail");
}

//****************** Switch statement ************//

switch(4){
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
    case 4:
        console.log("four");
        break;
    default:
        console.log(" iam default case");
        break;   
}
//*********** switch statement example  **********//

const num1 = 5;
const num2 = 4;
const operation = "*";
let result ;

switch(operation){
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*" :
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
        default:
            result = "invalid operation" 
            break;                 
}

console.log(result);     // it will print 5*4 = 20; 


//************ Ternary Operator  ************//

const numbers = 90;
numbers > 90 ? console.log("topper") : console.log("average")

// this is only good for if there is a one linee code