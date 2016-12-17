import axios from 'axios';

const API_KEY = '8828268e61bb76f22bfcab48c9c3c494';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('REQUEST', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
