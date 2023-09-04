import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function handleInput(response) {
    setWeatherData({
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      loaded: true,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <div className="container main-content">
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Search a city..."
                  autoFocus="on"
                  className="form-control"
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
          <h1>{weatherData.city}</h1>
          <ul>
            <li>
              <FormattedDate date={weatherData.date} />
            </li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
          <div className="row mt-4">
            <div className="col-6">
              <img src={weatherData.icon} alt={weatherData.description} />

              <span className="temperature-numeric-value">
                {weatherData.temperature}
              </span>
              <span className="temperature-unit">°C</span>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "74373fd9c9c828199b66c103f4039a7d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleInput);

    return "Loading...";
  }
}
