//******************** Static ********************//

class Ticket{


    constructor( name , trainNo , trainName ) {
         this.name = name;                  
         this.trainName = trainName;
         this.trainNo = trainNo;
         this.status = "Not Booked"
    }

     
//*************** Static *****************//


    static calculatePNR() {
        return (Math.random() * 100000000 ).toFixed(0).toString();  
    }


    bookTicket (amount , source , destination) {
         this.amount = amount;
         this.source = source;
         this.destination = destination ;
         this.status = "Booked" ;
         this.pnr = Ticket.calculatePNR();
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


console.log(Ticket.calculatePNR());      //output:- 71113527 (PNR no.)





// differnce between static and normal method like " bookTicket " , in static we do not need to make instant  , we can directly call " console.log(Ticket.calculatePNR);"