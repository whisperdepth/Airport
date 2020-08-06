import { fetchFlights } from "./flights.gateway";

export const GET_FLIGHTS_LIST = "FLIGHTS/GET_FLIGHTS_LIST";

export const getDepartures = (flights) => {
  return {
    type: GET_FLIGHTS_LIST,
    payload: {
      flights,
    },
  };
};

export const setFlightsToStase = () => {
  return (dispatch) => {
    fetchFlights().then((flightsData) => {
      const departure = flightsData.body.departure.map((flight) => {
        return {
          term: flight.term,
          time: flight.timeDepExpectCalc,
          city: flight["airportToID.city_en"],
          status: flight.status,
          airlineName: flight.airline.en.name,
          airlineLogo: flight.airline.en.logoSmallName,
          flightNum: flight["carrierID.code"] + flight.fltNo,
        };
      });

      const arrival = flightsData.body.arrival.map((flight) => {
        return {
          term: flight.term,
          time: flight.timeToStand,
          city: flight["airportFromID.city_en"],
          status: flight.status,
          airlineName: flight.airline.en.name,
          airlineLogo: flight.airline.en.logoSmallName,
          flightNum: flight["carrierID.code"] + flight.fltNo,
        };
      });

      const flights = {
        departure,
        arrival,
      };

      dispatch(getDepartures(flights));
    });
  };
};

export const setFilteredFlights = (departure, arrival) => {
  return (dispatch) => {
    const flights = {
      departure,
      arrival,
    };

    dispatch(getDepartures(flights));
  };
};
