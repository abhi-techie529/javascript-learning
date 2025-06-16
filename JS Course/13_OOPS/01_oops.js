//*********( old method ) here we use  function in OOPS */



function Ticket(name , trainNo , trainName) {
   this.name = name;                         // here (. this ) refers to " Ticket "
   this.trainName = trainName;
   this.trainNo = trainNo;
   this.status = "Not Booked"


}      // this is a constructor function which is starting with capital letter and we have to assign values in the starting of the function 


Ticket.prototype.bookTicket = function bookTicket( amount , source , destination ) {
    this.amount = amount;
    this.source = source;
    this.destination = destination ;
    this.status = "Booked" ;
    this.pnr = (Math.random() * 100000000 ).toFixed(0).toString();    // here " Math " keyword is used to provide a random number which is converted into string by help of " .toString() "
};



Ticket.prototype.cancelTicket = function cancelTicket( ) {
    this.status = "canceled";
}

const abhiTicket = new Ticket("Abhi" , 123456 , "hsr to rj ");          //( new ):- this keyword is used to allocate a new memory , so here for "Ticket " we assign a new memory

abhiTicket.bookTicket(100 , "hisar" , "Rajasthan")

const ankitTicket = new Ticket("Ankit" , 678998 , "rj to hsr ");

ankitTicket.cancelTicket(200 , "hisar" , "Rajasthan")

console.log({ abhiTicket , ankitTicket ,});
