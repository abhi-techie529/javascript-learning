//********************* Inheritance  *****************//


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
    fixedCharge = 150;
}

const abhiTatkalTicket = new TatkalTicket("Abhi" ,453678 ,"chennai express")

console.log(abhiTatkalTicket.fixedCharge);

