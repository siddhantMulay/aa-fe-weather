// List of Cities & their coords
const CITIES = [
  {
    name: "Ottawa",
    coords: "45.4215,75.6972"
  },
  {
    name: "Moscow",
    coords: "55.7558, 37.6173"
  },
  {
    name: "Tokyo",
    coords: "35.6762, 139.6503"
  }
];

// From Tomorrow.io
// URL: https://docs.tomorrow.io/reference/data-layers-weather-codes
const WEATHER_CODES = {
  "0": { value: "Unknown", icon: "sunny" }, // Fallback
  "1000": { value: "Clear, Sunny", icon: "sunny" },
  "1100": { value: "Mostly Clear", icon: "sunny" },
  "1101": { value: "Partly Cloudy", icon: "cloudy" },
  "1102": { value: "Mostly Cloudy", icon: "mostly_cloudy" },
  "1001": { value: "Cloudy", icon: "cloudy" },
  "2000": { value: "Fog", icon: "fog" },
  "2100": { value: "Light Fog", icon: "fog" },
  "4000": { value: "Drizzle", icon: "drizzle" },
  "4001": { value: "Rain", icon: "rain" },
  "4200": { value: "Light Rain", icon: "light_rain" },
  "4201": { value: "Heavy Rain", icon: "rain" },
  "5000": { value: "Snow", icon: "light_snow" },
  "5001": { value: "Flurries", icon: "mist" },
  "5100": { value: "Light Snow", icon: "light_snow" },
  "5101": { value: "Heavy Snow", icon: "heavy_snow" },
  "6000": { value: "Freezing Drizzle", icon: "drizzle" },
  "6001": { value: "Freezing Rain", icon: "heavy_freezing_rain" },
  "6200": { value: "Light Freezing Rain", icon: "light_freezing_rain" },
  "6201": { value: "Heavy Freezing Rain", icon: "heavy_freezing_rain" },
  "7000": { value: "Ice Pellets", icon: "ice_pellets" },
  "7101": { value: "Heavy Ice Pellets", icon: "ice_pellets" },
  "7102": { value: "Light Ice Pellets", icon: "light_pellets" },
  "8000": { value: "Thunderstorm", icon: "thunderstorms" }
};

export { CITIES, WEATHER_CODES };
