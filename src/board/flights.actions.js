import { filterFlightsSelector } from "../search/search.selectors";
import { fetchFlights } from "./flights.gateway";

export const GET_FLIGHTS_LIST = "FLIGHTS/GET_FLIGHTS_LIST";

const getFlightsList = (flights) => ({
  type: GET_FLIGHTS_LIST,
  payload: {
    flights,
  },
});

export const setFlightsToStase = (filterText) => (dispatch) =>
  fetchFlights()
    .then((flightsData) => {
      const departure = flightsData.body.departure.map((flight) => ({
        term: flight.term,
        time: flight.timeDepExpectCalc,
        city: flight["airportToID.city_en"],
        status: flight.status,
        airlineName: flight.airline.en.name,
        flightNum: flight["carrierID.code"] + flight.fltNo,
      }));

      const arrival = flightsData.body.arrival.map((flight) => ({
        term: flight.term,
        time: flight.timeToStand,
        city: flight["airportFromID.city_en"],
        status: flight.status,
        airlineName: flight.airline.en.name,
        flightNum: flight["carrierID.code"] + flight.fltNo,
      }));

      const filteredDeparture = filterFlightsSelector(departure, filterText);
      const filteredArrival = filterFlightsSelector(arrival, filterText);

      const flights = {
        departure: filteredDeparture,
        arrival: filteredArrival,
      };

      dispatch(getFlightsList(flights));
    })
    .catch(() => alert("Internal server error. Please, try again later."));
