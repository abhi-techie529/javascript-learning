//********************* Encapsulation  *****************//

/*

class Ticket{


    constructor( name , trainNo , trainName ) {
         this.name = name;                  
         this.trainName = trainName;
         this.trainNo = trainNo;
         this.status = "Not Booked"
    }

// here we do not need to use prototype keyword , this is the new method , "function" that was old method

    bookTicket (amount , source , destination) {
         this.amount = amount;
         this.source = source;
         this.destination = destination ;
         this.status = "Booked" ;
         this.pnr = (Math.random() * 100000000 ).toFixed(0).toString();  
    }

    cancelTicket() {
        this.status = "cancelled"
    }
}

class TatkalTicket extends Ticket {
    #fixedCharge = 150;

*/

// ************* get set concept  *************// 

/*
    get fixedCharge() {
        return this.#fixedCharge;
    }

    set fixedCharge(charge) {
        if (typeof charge !== "number"){
            throw Error ("Not a Number")
        }

        this.#fixedCharge = charge
    }
}

const abhiTatkalTicket = new TatkalTicket("Abhi" ,453678 ,"chennai express")

abhiTatkalTicket.fixedCharge = 200;

console.log(abhiTatkalTicket.fixedCharge);

*/


//' # ' is used to private the class than value can not be changed it can only accessed through the class , for accessing we use Get and Set concept 








//*********** how to make a private class  *************//


class Ticket{


    constructor( name , trainNo , trainName ) {
         this.name = name;                  
         this.trainName = trainName;
         this.trainNo = trainNo;
         this.status = "Not Booked"
    }

// here we do not need to use prototype keyword , this is the new method , "function" that was old method

    bookTicket (amount , source , destination) {
         this.amount = amount;
         this.source = source;
         this.destination = destination ;
         this.status = "Booked" ;
         this.pnr = (Math.random() * 100000000 ).toFixed(0).toString();  
    }

    cancelTicket() {
        this.status = "cancelled"
    }
}

class TatkalTicket extends Ticket {
    #fixedCharge = 150;

// ************* private class (changeFixedbyAdmin)  *************// 

  #chnageFixedByAdmin(){
    this.#fixedCharge = 500
  }


  // so if want to directly access this class , we can not able to access, we can only acces it by the main class " fixedCharge() "


    get fixedCharge() {
        return this.#fixedCharge;
    }

    set fixedCharge(charge) {
        if (typeof charge !== "number"){
            throw Error ("Not a Number")
        }

        this.#chnageFixedByAdmin();
    }
}

const abhiTatkalTicket = new TatkalTicket("Abhi" ,453678 ,"chennai express")

abhiTatkalTicket.fixedCharge = 200;

console.log(abhiTatkalTicket.fixedCharge);