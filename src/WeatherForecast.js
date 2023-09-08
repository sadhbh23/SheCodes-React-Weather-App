import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "74373fd9c9c828199b66c103f4039a7d";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="WeatherForecast-daily">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Fri</div>
            <WeatherIcon
              className="WeatherForecast-icon"
              code="01d"
              size={36}
            />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">23°C</span>
              <span className="WeatherForecast-temperature-min">9°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
