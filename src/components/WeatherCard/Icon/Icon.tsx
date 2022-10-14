import React, { Component, Suspense } from "react";

// All Weather Icons
import * as Weather from "@src/assets/icons";

type Props = {
  name: string;
};

/**
 * Icon component - Specific to WeatherCard
 */
class Icon extends Component<Props> {
  // Renders Weather Icon based on prop name
  renderIcon = (): React.ReactNode => {
    const { name } = this.props;
    switch (name) {
      case "cloudy":
        return <Weather.cloudy />;
      case "drizzle":
        return <Weather.drizzle />;
      case "fog":
        return <Weather.fog />;
      case "heavy_freezing_rain":
        return <Weather.heavy_freezing_rain />;
      case "heavy_snow":
        return <Weather.heavy_snow />;
      case "ice_pellets":
        return <Weather.ice_pellets />;
      case "light_freezing_rain":
        return <Weather.light_freezing_rain />;
      case "light_pellets":
        return <Weather.light_pellets />;
      case "light_rain":
        return <Weather.light_rain />;
      case "light_snow":
        return <Weather.light_snow />;
      case "mist":
        return <Weather.mist />;
      case "mostly_cloudy":
        return <Weather.mostly_cloudy />;
      case "rain":
        return <Weather.rain />;
      case "sunny":
        return <Weather.sunny />;
      case "thunderstorms":
        return <Weather.thunderstorms />;
    }
  };

  render(): React.ReactNode {
    return <Suspense fallback={<div>Loading...</div>}>{this.renderIcon()}</Suspense>;
  }
}

export default Icon;
