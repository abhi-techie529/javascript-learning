//************* BOM **************//

// window object represents the current browser window or tab.It is a global object , which means that you dont need to explictly reference it in most cases. for example, you could simply write 
// ( alert("hello,world")) instead of
//  ( window.alert("hello world"))

// console.log(window.alert("I am a window"));


//**************** Timimg method  *************//

// (i) setTimeout :- it is used to set time , after using it function will run after the given time.

// syntax :- 
/*

setTimeout(() => {
    
}, timeout);

*/
// ++++++++++++ method 1 ++++++++++++++//
/*
setTimeout(() => {
    console.log("mujhe 2 second baad output do");
    
    
}, 2000);       // 2000 milisecond = 2 second
*/


//+++++++++++++++ method 2 ++++++++++++//
/*
const message = () => {
    console.log("mujhe 2 second baad output do");
};

setTimeout(message,2000)

*/

// (ii) clearTimeout() :- it is a javascript function that cancels a timeout previously set with the setTimeout() function.

/*
const message = () => {
    console.log("mujhe 2 second baad output do");
};

const timeout = setTimeout(message,2000)

clearTimeout(timeout)
 
*/


//(iii) setInterval():- It is a built-in JS function that repeatedly  exectutes a function at a specified interval in (milliseconds) until it stopped.

/*

const message = () => {
    console.log("mujhe 2 second baad output do");
};

const interval = setInterval(message,1000)

setTimeout(() => {
    clearInterval(interval)      // after 10000,(10sec) the inerval will close
}, 5 000);

*/

//*********** Dialog method  ********************//

//=> (i) alert 
//  alert(" this is a message")

 //=>(ii) prompt:- 

//  const inputValue = prompt("enter any input")
//  console.log(inputValue);
 
//=>  (iii) coinfirm():- display a dialog box with a message OK and Cancel buttons.Returns a Boolean value indicating whether the user clicked OK or cancel.
 

// ************** Location method *****************//

//=>(i) location.href :- return the href(URL) of the currnt page
console.log(location.href);

//output :- http://127.0.0.1:5500/JS%20Course/Bom/bom.html

//=> (ii) location.hostname :-returns tha domain name of the web host

console.log(location.hostname);
 
//output:- 127.0.0.1

// => (iii) location.pathname :- returns the path and filename of the current page

console.log(location.pathname);

//output:- /JS%20Course/Bom/bom.html

//=> (iv) location.protocol :- returns the web protocol used (http: or https:)

console.log(location.protocol);

//output:- http:

//=>(v) location.assign():- loads a new document 

console.log(location.assign);



//*********** console methods  *************//

//(i) console.table:

//(ii)console.timing:

console.time("funcion timing");

function timeRun(){

    for( let i = 0;i<= 1000 ;i++){
          console.log(i);
        
    }
      
}
timeRun();
console.timeEnd("function timing")
