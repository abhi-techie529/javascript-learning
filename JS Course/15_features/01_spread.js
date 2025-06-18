//***************** Spread Operator ***************//



// const array1 = [0,1,2,3];
// const array2 = [4,5,6,7];

// const combineArray = [...array1 ,...array2];         // spread operator :- (...)

// console.log(combineArray);



//*************** spread operato (example 2) *****************//

const student = {
    name:"Abhimanyu",
    roll:55,
}

const cloneObj = {
    ...student,                   // it clone the (student) data here
}

console.log(cloneObj);
