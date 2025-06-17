//**************** Call_Apply_Bind ***************//


//*************** CALL **************//


// const student1 = {
//     name: "Abhimanyu",
//     marks: 25,
//     isPassed: function () {
//         if(this.marks>25){
//         console.log("you are Passed");
//     }else{
//         console.log("you are failed");
        
//     }
// }
// };

// const student2 = {
//     name : "Raj",
//     marks: 88,
// };

// student1.isPassed.call(student2);     // here we can borrow the function of student 1 , that why the result is passed!





//********************* APPLY ******************//


const address1 = {
        city: "Hisar",
        state: "Haryana",

    address: function ( street , pincode){
        console.log(`${street},${pincode} ,${this.city},${this.state}`);
    },
};

const address2 = {
        city: "Hisar",
        state: "Haryana",
};

// for Call 
address1.address.call(address2,"4",878788);
// for Apply
address1.address.apply(address2,["5",878788]);      // using Array
// for bind :- it is used to hold the values
const bindAddressValue = address1.address.bind(address2,["5",878788]);    

bindAddressValue();
