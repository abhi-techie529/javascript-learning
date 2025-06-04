//****** Question 2 *********//
// Create a function that calculate area of circle
// function name should be calcAreaofCircle()
//createa another function calcSquare()
// Pass calcAreaOfCircle function as callback of calcSquare
// Like - calcSquare(calcAreaOfCircle)
// store value of valculated value in result 
// Like - result = calcSquare(calcAreaOfCircle)
// then print result ;

const calcAreaofCircle = (radius) => {
    return Math.PI * radius * radius ;
}
console.log("area of circle :" , calcAreaofCircle(2));

const calcSquare = (callback , radius) => {
    const areaOfCircle = callback(radius);         // calls calcAreaofCircle(2) .., Call the callback(radius) → in this case, it calls calcAreaofCircle(2) = 12.56637...
    return areaOfCircle * areaOfCircle            // squares the result .. ,Then square that result: 12.56637 × 12.56637 = 157.9136
}

const result = calcSquare(calcAreaofCircle , 2)

console.log("Result : " , result);


/* 🧠 Why Use a Callback?

You're passing a function (calcAreaofCircle) into another function (calcSquare) — this lets calcSquare be flexible and use any logic you pass in.

For example, you could pass a different shape's area function, and still square it.  */