 // using switch statemnt check number is divisible by 5 and 15

 const num = 75;

 switch(true){
    //  case num % 5 === 0 :
    //     console.log("number is divisible by 5:", num);
    //     break;
    case num % 5 === 0 && num % 15 === 0:
        console.log("number is divisible by 5 and 15 :", num);
        break;
        default:
            console.log("number is not divisible by 5 and  15");
            break;
 }