function* work(){
    yield "Cooking";

    yield "Bathing";

    yield "Sleeping";
}

const generatorFn = work();

console.log(generatorFn.next());                 //next():- here,it is used to print the first value 
console.log(generatorFn.next());                
console.log(generatorFn.next());                
console.log(generatorFn.next());              



// For making generator function we use ( * ) with the function