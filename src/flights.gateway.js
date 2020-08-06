import moment from "moment";

const baseUrl = "https://api.iev.aero/api/flights";

export const fetchFlights = () =>
  fetch(
    `${baseUrl}/${moment(new Date()).format("DD-MM-YYYY")}`
  ).then((response) => response.json());
