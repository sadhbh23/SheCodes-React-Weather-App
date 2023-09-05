import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("metric");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function convertToCelcius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  if (unit === "metric") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature-numeric-value">{props.celcius}</span>
        <span className="temperature-unit">
          °C |
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <span className="WeatherTemperature">
        <span className="temperature-numeric-value">
          {Math.round(fahrenheit)}
        </span>
        <span className="temperature-unit">
          <a href="/" onClick={convertToCelcius}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
