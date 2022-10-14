import { lazy } from "react";

// Lazy Load Icons as required
// These are loaded via React.Suspense in WeatherCard/Icon.tsx
const cloudy = lazy(() => import("./cloudy.svg"));
const drizzle = lazy(() => import("./drizzle.svg"));
const fog = lazy(() => import("./fog.svg"));
const heavy_freezing_rain = lazy(() => import("./heavy_freezing_rain.svg"));
const heavy_snow = lazy(() => import("./heavy_snow.svg"));
const ice_pellets = lazy(() => import("./ice_pellets.svg"));
const light_freezing_rain = lazy(() => import("./light_freezing_rain.svg"));
const light_pellets = lazy(() => import("./light_pellets.svg"));
const light_rain = lazy(() => import("./light_rain.svg"));
const light_snow = lazy(() => import("./light_snow.svg"));
const mist = lazy(() => import("./mist.svg"));
const mostly_cloudy = lazy(() => import("./mostly_cloudy.svg"));
const rain = lazy(() => import("./rain.svg"));
const sunny = lazy(() => import("./sunny.svg"));
const thunderstorms = lazy(() => import("./thunderstorms.svg"));

export {
  cloudy,
  drizzle,
  fog,
  heavy_freezing_rain,
  heavy_snow,
  ice_pellets,
  light_freezing_rain,
  light_pellets,
  light_rain,
  light_snow,
  mist,
  mostly_cloudy,
  rain,
  sunny,
  thunderstorms
};
