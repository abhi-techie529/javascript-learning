// write a program that will allow someone to guess a four digit pin exactly 4 times. if the user guesses the number correctlu . it  prints "That was correct!" Otherwise it will print "Sorry that was wrong". Program stops after the 4th attempt of if the got it right . //

// Step 1 = take user input
// compare user input with default input 
// if input is correct then show message that is correct 
// if input is not correct than show message wrong message & give retry 
// if retry more than 4 than exit 


const defaultPin = "0000"
const guessMessage = "please make  your guess : ";
const wrongMessage = "Sorry that was wrong :";
const correctMessage = "That was correct :";
const maxAttempt = 4;
let currentAttempt = 1;

for(let i = 1 ; i <= maxAttempt ; i++){
    const userInput = prompt(`Attempt Remaning : ${maxAttempt - currentAttempt} \n ${guessMessage} `)

    if(userInput === defaultPin && userInput.length === 4){
        console.log(correctMessage);
        break;
    }
    else{
        console.log(wrongMessage);
    }
    currentAttempt++;
}
