export const departureSelector = (state) =>
  state.flights.departure.filter(
    (flight) => new Date(flight.time).getDate() === new Date().getDate()
  );

export const arrivalSelector = (state) =>
  state.flights.arrival.filter(
    (flight) => new Date(flight.time).getDate() === new Date().getDate()
  );
