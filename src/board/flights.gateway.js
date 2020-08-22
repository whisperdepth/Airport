import moment from "moment";

const proxyUrl = "https://cors-anywhere.herokuapp.com";

const baseUrl = "https://api.iev.aero/api/flights";

export const fetchFlights = () =>
  fetch(
    `${proxyUrl}/${baseUrl}/${moment(new Date()).format("DD-MM-YYYY")}`
  ).then((response) => {
    if (response.ok) return response.json();
    throw new Error();
  });
