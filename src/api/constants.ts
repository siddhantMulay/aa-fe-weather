/**
 * API used for weather is from Tomorrow.io (https://www.tomorrow.io/)
 * Usage limit is of 500 calls in total.
 */
const API_KEY = "QPBWdX8TBvg3CLMri3W0rAhqocbWjK02";
const PARAMS =
  "fields=temperature&fields=weatherCode&units=metric&timesteps=1d&startTime=now&endTime=nowPlus4d";
const ENDPOINT = `https://api.tomorrow.io/v4/timelines?location=%LOCATION%&${PARAMS}&apikey=${API_KEY}`;

export default ENDPOINT;
