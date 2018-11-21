const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = this.journeys.map((journey) => {
    const location = journey.startLocation;
    return location;
  });
  return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = this.journeys.map((journey) => {
    const location = journey.endLocation;
    return location
  })
  return endLocations;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeys = this.journeys.filter((journey) => {
    if (journey.transport === transport){
      return journey;
    }
  })
  return journeys
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeys = this.journeys.filter((journey) => {
    if (journey.distance > minDistance){
      return journey;
    }
  })
  return journeys
};

Traveller.prototype.getJourneyDistances = function() {
  const distances = this.journeys.map((journey) => {
    const distance = journey.distance;
    return distance;
  });
  return distances;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const total = this.getJourneyDistances().reduce((accum, distance) => {
    return accum + distance
  }, 0);
  return total
};

Traveller.prototype.getJourneyTransport = function() {
  const transports = this.journeys.map((journey) => {
    const transport = journey.transport;
    return transport;
  });
  return transports;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const transports = this.getJourneyTransport();
  const unique = [];

  transports.forEach((transport) => {
    if (!unique.includes(transport)){
      unique.push(transport);
    }
  })
  return unique;
};



module.exports = Traveller;
