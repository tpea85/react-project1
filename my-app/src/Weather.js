import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <div className="weatherApp">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter your location"
                className="formControl"
                autoComplete="off"
              ></input>
            </div>
            <div class="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1>Paris</h1>
        <ul>
          <li>
            Last updated on:
            <span> Wednesday 21:35</span>
          </li>
          <li>Sunny</li>
        </ul>
        <div class="row">
          <div class="col-6 d-flex weatherTemperature">
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="weatherImage" />
            <strong>4 </strong>
            <span class="units"> °C </span>
          </div>
          <div class="col-6">
            <ul>
              <li>Feels like: 1°C</li>
              <li>Humidity: 50%</li>
              <li>Wind: 36 Km/h</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="weatherForecast"></div>
      </div>

      <small>
        <a
          href="https://github.com/tpea85/react-project"
          target="_blank"
          rel="noreferrer"
        >
          Open-sourced on GitHub
        </a>
        , by Talancia Pea
      </small>
    </div>
  )
}
