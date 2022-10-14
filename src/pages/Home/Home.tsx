import React, { Component } from "react";

// Components
import Card from "@src/components/Card";
import WeatherCard from "@src/components/WeatherCard";
import Navbar from "@src/components/Navbar";

// API
import API from "@src/api/utils";

// Constants
import { CITIES } from "@src/constants";

import "./Home.less";

// Type for core weather data
type WeatherItem = {
  startTime: string;
  values: {
    temperature: number;
    weatherCode: number;
  };
};

// Type for Weather Data
type WeatherData = {
  [index: number]: WeatherItem[];
};

// Type for this component
type StateProps = {
  selectedCity: number;
  weatherData: WeatherData;
  loading: boolean;
};

/**
 * Homepage
 */
class Home extends Component<unknown, StateProps> {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: 0,
      weatherData: {},
      loading: true
    };
  }

  // Fetches data for all cities in navbar on inital load
  fetchData = async () => {
    const masterData = await Promise.all(
      CITIES.map(async (item) => {
        const resp = await API(item.coords);
        return resp.data.timelines[0].intervals;
      })
    );

    this.setState({
      weatherData: { ...masterData },
      loading: false
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  // Adds Weather cards to an array and returns them all
  renderWeatherCards = (): React.ReactNode[] => {
    const retArr = [];
    const { weatherData, selectedCity } = this.state;
    const currentDate = new Date();

    // This is done to match the current date
    currentDate.setDate(currentDate.getDate() - 1);

    // Loop through all data and generate weather info
    weatherData[selectedCity]?.forEach((item, index) => {
      // Outputs short day string eg. Fri
      const day = new Date(item.startTime).toLocaleDateString("en-ca", { weekday: "short" });

      // Checks if day is today
      const isToday =
        new Date(item.startTime.substring(0, 10)).toDateString() === currentDate.toDateString();

      retArr.push(
        <WeatherCard
          day={`${isToday ? "Today" : day}`}
          temp={Math.round(item.values.temperature)}
          forecast={item.values.weatherCode}
          highlight={isToday}
          key={`weather-${index}`}
        />
      );
    });

    return retArr;
  };

  // Callback for weather call
  onNavClick = (index): void => {
    this.setState({
      selectedCity: index
    });
  };

  render() {
    const { selectedCity, loading } = this.state;

    return loading ? (
      <Card className="loading">Loading...</Card>
    ) : (
      <>
        <Navbar onNavClick={this.onNavClick} activeItem={selectedCity} />
        <Card className="weatherAlign">{this.renderWeatherCards()}</Card>
      </>
    );
  }
}

export default Home;
