//*************** Optioanl Chaining *****************//

// It is used to access deeply nested properties of an objecct without having mannually check .


const person ={
  name:"Abhi",
  address: {
    city: "NewYork"
  }
};

console.log(person.address?.state);     // output:- undefined
