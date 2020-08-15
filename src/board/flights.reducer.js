import { GET_FLIGHTS_LIST } from "./flights.actions";

const initialValue = {
  departure: [],
  arrival: [],
};

export default (state = initialValue, action) => {
  switch (action.type) {
    case GET_FLIGHTS_LIST:
      const { departure, arrival } = action.payload.flights;
      return {
        departure,
        arrival,
      };
    default:
      return state;
  }
};
