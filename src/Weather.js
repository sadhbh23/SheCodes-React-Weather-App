import React from "react";
import "./Weather.css";

export default function Weather() {
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
        <h1>Berlin</h1>
        <ul>
          <li>Monday, 4 September</li>
          <li>Sunny</li>
        </ul>
        <div className="row mt-4">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Sunny"
            />

            <span className="temperature-numeric-value">24</span>
            <span className="temperature-unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 0%</li>
              <li>Humidity: 48%</li>
              <li>Wind: 5 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
