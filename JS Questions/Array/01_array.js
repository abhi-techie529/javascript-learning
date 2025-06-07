// concatenate variable number of input array

const concat = (...num) => num.flat(2)         // (...):- spread property

console.log(concat([1,2,3] ,[4,5],[6,7,[8,9]]));

// output :- 
/*

[
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
  
  */