import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div classname="WeatherForecast">
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
