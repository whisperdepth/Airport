export const filterTextSelector = (state) => {
  return state.filterText;
};

export const filterFlightsSelector = (flights, filterText) =>
  flights.filter(
    (flight) =>
      flight.airlineName.toUpperCase().includes(filterText.toUpperCase()) ||
      flight.city.toUpperCase().includes(filterText.toUpperCase()) ||
      flight.flightNum.toUpperCase().includes(filterText.toUpperCase())
  );
