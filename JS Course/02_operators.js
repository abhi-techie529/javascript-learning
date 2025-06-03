// ********** Airthmatic operators *************//

let a = 20;
let b = 5;

console.log("a + b =" , a + b);
console.log("a - b =" , a - b);
console.log("a * b =" , a * b);
console.log("a / b =" , a / b);
console.log("a % b =" , a % b);       // modules
console.log("a ** b =" , a ** b);    // power operator (20*5)

console.log("++a =" , ++a);          // pre-increment ,the value of the variable increase first and than it is used in the expression , (first , a becomes 21 ,than print 21)
console.log("a++ =" , a++);          // post-increment ,the value of the variable is used first , then it is increased (first,print 21 , than a becomes 22)
console.log("a =" , a);            // a is now 22

console.log("--b =" , --b);    // pre-decrement ,the value of the variable decrease first and than it is used in the expression , (first , b becomes 4 ,than print 4)
console.log("b-- =" , b--);  // post-decrement ,the value of the variable is used first , then it is decreased (first,print 4 , than a becomes 3)
console.log("b =", b);       // b is now 3

// *************** Assignment Oprator ***************//

let c = 10 ;
let d = 5;
let e = 9;

console.log("c =", (c += d));       // (c += d) => c = c + d , now c = 15
console.log("c =", (c -= d));       // (c -= d) => c = c - d , now c = 10
console.log("c =", (c *= d));       // (c *= d) => c = c * d , now c = 50
console.log("c =", (c /= d));       // (c /= d) => c = c / d , now c = 10
console.log("c =", (c %= e));       // (c %= d) => c = c % d , now c = 1


//**************** Comparison Operators **************//

let f = 5;
let g = "5" ;
let h = 10 ;

console.log("f == g:",f == g);      //  ( == ) equal to  :-
console.log("f === g:",f === g);   // ( === ) strict equal to  :- this ( === ) operator also help to checking the type , means like : differentiate between the string and number , but ( == ) this operator not 
console.log("f != h:", f != h);    // ( != ) not equal to :- 
console.log("f !== h:", f !== h);    // (!==) strict not equal to :-
console.log("f < h:",f < h);       // ( < ) less than :-
console.log("f > h:",f > h);       // ( > ) greater than :-
console.log("f <= g:",f <= g);      //( <= ) less than and equal to :-
console.log("f >= h:",f >= h);      // ( >= ) greater than and equal to :- 

//**************** Logial Operators **********//

 let i = true ;
 let j = false ;
//******** AND ( && ) ***********//
console.log("i && i :", i && i);   // AND logic (&&) :- only , [true,true = true ; ] rest is false 
console.log("i && j :", i && j);   // false
console.log("j && i :", j && i);    // false
console.log("j && j :", j && j);    //false

//*********** OR ( || ) ***********//
console.log("i || i :", i || i);        //true 
console.log("i || j :", i || j);       // true 
console.log("j || i :", j || i);       //true
console.log("j || j :", j || j);      // false

//********** NOT ( ! ) ************//
console.log(" !(i && j :)", !(i && j));       // true , its just reverse the real answer
console.log(" !(j && i :)", !(j && i));       //true