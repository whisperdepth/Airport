export const filterTextSelector = (state) => state.filterText;

const doesInclude = (flightParameter, filtertext) =>
  flightParameter.toUpperCase().includes(filtertext.toUpperCase());

export const filterFlightsSelector = (flights, filterText) =>
  flights.filter((flight) => {
    const { airlineName, city, flightNum } = flight;
    return (
      doesInclude(airlineName, filterText) ||
      doesInclude(city, filterText) ||
      doesInclude(flightNum, filterText)
    );
  });
