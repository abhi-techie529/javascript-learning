//******************** override & overload **********************//


//***************** Override  *******************//


// class Ticket{


//     constructor( name , trainNo , trainName ) {
//          this.name = name;                  
//          this.trainName = trainName;
//          this.trainNo = trainNo;
//          this.status = "Not Booked"
//     }


//     bookTicket (amount , source , destination) {
//          this.amount = amount;
//          this.source = source;
//          this.destination = destination ;
//          this.status = "Booked" ;
//          this.pnr = (Math.random() * 100000000 ).toFixed(0).toString();  
//     }

//     cancelTicket() {
//         this.status = "cancelled"
//     }
// }

// class TatkalTicket extends Ticket {
//     #fixedCharge = 150;


//     get fixedCharge() {
//         return this.#fixedCharge;
//     }

      //************* overrde **************//


//     bookTicket(amount ,source , destination) {
//     super.bookTicket(amount ,source , destination)
//     this.amount += this.fixedCharge
//     }




//     set fixedCharge(charge) {
//         if (typeof charge !== "number"){
//             throw Error ("Not a Number")
//         }

//         this.fixedCharge = charge;
//     }
// }

// const abhiTatkalTicket = new TatkalTicket("Abhi" ,453678 ,"chennai express")

// abhiTatkalTicket.bookTicket(500,"hisar" ,"rajsthan")

// console.log(abhiTatkalTicket);



// Override :- when we replace whole original method that is called override .








//********************  overload **********************//



class Ticket{


    constructor( name , trainNo , trainName ) {
         this.name = name;                  
         this.trainName = trainName;
         this.trainNo = trainNo;
         this.status = "Not Booked"
    }


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
    #isRefundable = true;


    get fixedCharge() {
        return this.#fixedCharge;
    }

      //************* overload **************//


    bookTicket(amount ,source , destination,isRefundable)     // so here load are increased //
    {
    super.bookTicket(amount ,source , destination)
    this.amount += this.fixedCharge
    this.#isRefundable === isRefundable;
    }




    set fixedCharge(charge) {
        if (typeof charge !== "number"){
            throw Error ("Not a Number")
        }

        this.fixedCharge = charge;
    }
}

const abhiTatkalTicket = new TatkalTicket("Abhi" ,453678 ,"chennai express")

const abhiTicket = new Ticket("Abhi plain ticket" ,453678 ,"chennai express")



abhiTatkalTicket.bookTicket(500,"hisar" ,"rajsthan" , false)

abhiTicket.bookTicket(500,"hisar" ,"rajsthan" )      // here fixedcharge are also not count 

console.log(abhiTatkalTicket,abhiTicket);




// Overload :- when we add extra field or parameter that is called overload
