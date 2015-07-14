function Taxi(driverName, maxNumberOfPassengers) {
  this.driverName = driverName,
  this.maxNumberOfPassengers = maxNumberOfPassengers
  this.passengers = [];
}

Taxi.prototype.addPassenger = function(passengerName) {
  this.passengers.push(passengerName);
  return this.passengers;
};

Taxi.prototype.passengerCount = function(){
  return this.passengers.length;
}

// DO NOT MODIFY BELOW THIS COMMENT:
module.exports = Taxi;
