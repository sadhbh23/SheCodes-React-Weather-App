import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function SearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      loaded: true,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "74373fd9c9c828199b66c103f4039a7d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleInputChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div className="SearchEngine">
        <div className="container main-content">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Search a city..."
                  autoFocus="on"
                  className="form-control"
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
          <WeatherForecast />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
