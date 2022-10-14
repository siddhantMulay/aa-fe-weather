import React, { Component } from "react";

// Constants
import { WEATHER_CODES } from "@src/constants";

// Internal Components
import Icon from "./Icon";

import "./WeatherCard.less";

// Type for WeatherCard
type Props = {
  day: string;
  temp: number;
  forecast: number;
  highlight?: boolean;
};

/**
 * Weather Card
 */
class WeatherCard extends Component<Props> {
  // Render Temperature
  renderTemp = () => {
    const { temp, highlight, forecast } = this.props;
    return (
      <>
        <span className={`temp ${highlight ? "highlight" : ""}`}>{`${temp}°`}</span>
        {highlight && <span className="forecast">{WEATHER_CODES[forecast].value}</span>}
      </>
    );
  };

  render() {
    const { day, temp, forecast, highlight } = this.props;
    return (
      <div className={`weatherCard ${highlight ? "highlight" : ""}`}>
        <span className="day">{day}</span>
        <div className="icon">
          <Icon name={WEATHER_CODES[forecast].icon} />
        </div>
        <div className="tempBlock">{this.renderTemp()}</div>
      </div>
    );
  }
}

export default WeatherCard;
