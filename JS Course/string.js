//********** Strings ***************//

// Double Quotes -> " " ;
let name = "Abhimanyu" ;
// Single Quotes -> ' ' ;
let lastname = 'verma' ;
// Template  literals -> ` ` ;
let lastname1 = `verma` ;

//************ example of strings ********//
 const naam = "Abhimanyu verma";
 const naam1 = 'chakarvyuah'

 console.log(naam[6]);
 console.log(naam1[6]);
 

 //******escape method **********//

 const message = " Hi,I am Abhimanyu \n I am 22 year old"  // \n:- this is used for next line 
 const message1 = " Hi,I am Abhimanyu \t \t I am 22 year old"  // \t:- this is used for space in the line 

 console.log(message);
 console.log(message1);
 
//************ Template literal ***********//

const greeting = (name1) => {

    // console.log(" hello,i am " + name1 + " and you");    // old method
    console.log(` hello,i am ${name1}  and you`);           // new method
    
}
greeting("Abhi")

//************ different string properties **********//

//  toUpperCase() :- upper case 

const change = "hair cut"
console.log(change.toUpperCase());   // output :- HAIR CUT

// toLowerCase() :- Lower case 

const change1 = "hair cut"
console.log(change1.toLowerCase());   // output :- hair cut

// trim() :- trim the string means remove the unwanted space

const change2 = "   hair cut"
console.log(change2.trim());   // trimStart :- remove the starting space , trimEnd :- remove the ending space

console.log(change2.length);   // length :- tell us lenght of the string

// Get character at index 

console.log(change2.charAt(8));   // output :- c

// replace:-  replace value1 with value 2

const change3 = "hello , who are you ;"
console.log(change3.replace("who" , " how"));   // replace():- it replace value1 to value2
console.log(change3.replaceAll("o" , "e"));   // replaceAll() it will replace "o" with "e"

//split() :- split change the string into array

console.log(change3.split(" "));       //example 1
console.log(change3.split(" ")[0]);   //example 2
console.log(change3.split("o"));       // example 3

// concat():- if want to add somethin in the existing string then we use it 

console.log(change3.concat(" Hi , i am Abhi"));   // output :- hello , who are you ; Hi , i am Abhi

// substring() :- get sub string from index 9 to 11

console.log(change3.substring( 8 , 11));   // output :- who

// includes :- this tell us that " this(anything) " is exist in the string or not

console.log(change3.includes( "are"));   // output :- true , means exist 

// indexOf() :- get the index of the string

console.log(change3.indexOf( "are"));    // output :- 12 
console.log(change3.lastIndexOf( "o"));   // output :- 17 , last index of "o" is 17
