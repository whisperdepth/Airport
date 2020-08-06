import { GET_FLIGHTS_LIST } from "./flights.actions";

const initialValue = {
  departure: [],
  arrival: [],
};

export default (state = initialValue, action) => {
  switch (action.type) {
    case  GET_FLIGHTS_LIST: 
    console.log(action.payload.flights)
     return {
       ...state,
        departure: action.payload.flights.departure,
        arrival: action.payload.flights.arrival,
     }
    default:
      return state;
  }
};
