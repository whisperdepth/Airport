export const departureSelector = (state) => {
  return state.departure.filter(
    (flight) => new Date(flight.time).getDate() === new Date().getDate()
  );
};

export const arrivalSelector = (state) => {
  return state.arrival.filter(
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
