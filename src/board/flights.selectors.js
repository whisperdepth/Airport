export const departureSelector = (state) => {
  return state.flights.departure.filter(
    (flight) => new Date(flight.time).getDate() === new Date().getDate()
  );
};

export const arrivalSelector = (state) => {
  return state.flights.arrival.filter(
    (flight) => new Date(flight.time).getDate() === new Date().getDate()
  );
};

export const todayFlightsSelector = (state) => {
  const departure = departureSelector(state);
  const arrival = arrivalSelector(state);
  return {
    departure,
    arrival,
  };
};