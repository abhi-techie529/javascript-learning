//**************( new method ) here we use class in OOPS **************//


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

const abhiTicket = new Ticket("Abhi" , 123456 , "hsr to rj ");          //( new ):- this keyword is used to allocate a new memory , so here for "Ticket " we assign a new memory

abhiTicket.bookTicket(100 , "hisar" , "Rajasthan")

const ankitTicket = new Ticket("Ankit" , 678998 , "rj to hsr ");

ankitTicket.cancelTicket(200 , "hisar" , "Rajasthan")

console.log({ abhiTicket , ankitTicket ,});


 