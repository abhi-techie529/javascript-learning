//*************** Syncronous Programming *************//

 
// console.log("Get");
// console.log("Set");
// console.log("Ready");
// console.log("Go");


//************ Asyncronous Programming ******************//

// console.log("Get");
// setTimeout( () => {
//     console.log("Set");              
// },2000)                    //It takes 2 second to print the output
// console.log("Ready");
// console.log("Go");










//************* Callback  ***************//

// function logGet(){
//     console.log("Get");
// }

// logGet();

// function logSet(Callback) {
//     setTimeout(() => {
//         console.log("Set");
//         Callback()
//     },2000);
// }

// logSet(logReadyAndGo)

// function logReadyAndGo() {
//     console.log("Ready");
//     console.log("Go");
// }




//************ another callback example ***************//


/*

function fetchData(callback){
    setTimeout(() => {
        const data = [1,2,3,4];
        callback(data)
    }, 2000);
}

function processData(data){
    console.log(data.map((item) => item * 2));
}

fetchData(processData);       // pass processData function as a callback

*/






//**************** CAllback Hell ***************//

/*
getData((error , data) => {
    if(error){
        console.log(error);
    }
    else {
        processData(data , (error ,processData) => { 
            if (error) {
                console.log(error);
            }
            else {
                savaData(processData,(error) => {
                    if(error){
                        console.log(error);
                    }
                    else{
                        console.log("Data saved successfully");
                        
                    }
                }) 
            }
        })
    }
})

*/

// so callback hell is very complex , to solve this we use " Promise" and its advances version called as " Async/await"









//*************** Promises *************//

// Pending :- Starting stage
// Fulfilled :- When promise reseolved
// Rejected :- When promise is rejected

/*

const channel = new Promise((resolve , rejected) => {
    const isError = false;

    if(isError){
        rejected("something went wrong")
    }
    else{
        resolve("hi , i am abhi")
    }
})

console.log(channel);

*/

// output :- Promise { 'hi , i am abhi' }  , means condition Fulfilled

// if isError = true  , condtion  will Rejected 

// if we can not give any input than it show condtion ,pending


//******** how to handle resolve and reject  *********//

/*

channel.then((data) => {
    console.log(data);
    
}).catch((error) => {
    console.log(error);
    
})

*/

//1.) if we triggered the ( resolve) part at that moment ( . then ) is triggered
//2.) if we triggered the ( reject) part at that moment ( .catch ) is triggered







//***************** How to uses promises ****************//

// we used here promises instead of callback

/* 

function logGet(){
    console.log("Get");
}

logGet();

const promise = new Promise((resolve , reject) => {
         setTimeout(() => {
        console.log("Set");
        resolve();                 // resolve or reject
    },2000);
})

promise
.then(() => {
    logReadyAndGo();
})
.catch(() => {
    console.log("this is error");
    
})
function logReadyAndGo() {
    console.log("Ready");
    console.log("Go");
}

*/



//*********** Multiple promises *************//

/*

const fetchData = new Promise((resolve , reject) => {
     resolve([1,2,3,4]);
});

fetchData
.then((data) => {
    console.log("than1" , data);

    return data.map((value) => value * 2)
})
.then((data) => {
    console.log("than2" ,data);

    return data.map((value) => value -1)
})
.then((data) => {
    console.log("than3" ,data);
    
})
.catch((error) => {
    console.error(error);
})
.finally(() => {
    console.log("It will trigger always");
    
})

*/



//**************** Static classes ***********//

/*

const p1 = Promise.reject("I will always trigger catch block")   // option 2 :- .reject
const p2 = Promise.reject("I will always trigger then block")
const p3 = new Promise((resolve,reject) => {

    setTimeout(() => {
        reject(" Promise 3 success")
    },2000)
})
const p4 = new Promise((resolve,reject) => {

    setTimeout(() => {
        reject(" Promise 4 success")
    },3000)
})

*/

// Promise.all():- for apply this property , we need "resolve" property  for all the cases ,if any single case are about reject than this property is not worked.

/*

const promises = Promise.all([p1,p2,p3]);

promises
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));

*/

// Promise.allSettled():- if only one case for " resolve " at that situatin than it is also working

// const promises = Promise.allSettled([p1,p2,p3]);

// promises
// .then((data) => {
//     console.log(data);
// })

// in this we do not need to apply catch block because even after apply the "reject" all over , it gives output of "data" 



//************** Promise Race ****************//

//in this whose time more that one print late and if anyone has less time than it will print first , same for in case of error , if error occurs first than print first 

// const promises = Promise.race([p3,p4]);

// promises
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error));



//************** Promise Any ****************//

// in this if all promises are rejected than it will print (.catch) block and if any of them resolve than it gives ( .then ) block


// const promises = Promise.any([p1,p2,p3,p4]);

// promises
// .then((data) => {
//     console.log("then block");
//     console.log(data);
// })
// .catch((error) => console.log(error));


// output:-   if all are rejected 
/* 

$ node 01_async.js
[AggregateError: All promises were rejected] {
  [errors]: [
    'I will always trigger catch block',
    'I will always trigger then block',
    ' Promise 3 success',
    ' Promise 4 success'
  ]
}

*/





//******************** Async & await *****************//



// const channelName = new Promise((resolve , reject) => {
//     const isError = false;

//     if(isError){
//         rejected("something went wrong")
//     }
//     else{
//         resolve("hi , i am abhi")
//     }
// });

// channelName
// .then((channel) => {
//     console.log("old promise");
    
//     console.log(channel); 
// })
// .catch((error) => {
//     console.log("old promise error");
   
//     console.log(error);
    
// })


//***************** */ using  async syntax

/*

const channelNameAsync = async () => {
    throw "Hello ,I am Abhi"            //( throw ) trigger " "reject" and ( return ) trigger the " resolve "       
}

channelNameAsync()
.then((channel) => {
    console.log("async");
    
    console.log(channel);  
})
.catch((error) => {
     console.log("async error");

     console.log(error);
     
})

*/


//*************** Await example ****************//

/*

const fetchDataAsync = async() => {
    const error = false ;
    if(error){
        throw "some error";
    }
  return new Promise((resolve) => {
      setTimeout(() => {
        resolve ([1,2,3,4 ]);
    }, 2000);
  });
};

async function processData() {
    try{
        const data = await fetchDataAsync();    // await:- it waits in the background for the data
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}

processData();

*/


//************** Error Object **************//

/*

const fetchDataAsync = async() => {
    const error = true ;
    if(error){
        throw new SyntaxError ("hello , this is error");
    }
  return new Promise((resolve) => {
      setTimeout(() => {
        resolve ([1,2,3,4 ]);
    }, 2000);
  });
};

async function processData() {
    try{
        const data = await fetchDataAsync();
        console.log(data);
    } catch(error) {
        console.log(error.name);    // error
        console.log(error.message);   // "cannot divide by zero"
        console.log(error.stack);  // stack trace of the error 
    }
}

processData();

*/  