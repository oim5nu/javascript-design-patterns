var Airline = function() {};
Airline.prototype.produceTickets = function() {
  return "Airline Tickets";
};

var Customer = function() {};
Customer.prototype.buyTickets = function(tourAgent) {
  console.log("I have got the " + tourAgent.produceTickets());
};

var TourAgent = function(airline) {
  this.airline = airline;
};
TourAgent.prototype.produceTickets = function() {
  return this.airline.produceTickets();
};


var airline = new Airline();
var tourAgent = new TourAgent(airline);

var customer = new Customer();
customer.buyTickets(tourAgent);

