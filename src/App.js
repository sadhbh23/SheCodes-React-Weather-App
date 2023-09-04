import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="https://sadhbhredmond.dev/" target="_blank">
            Sadhbh Redmond
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/sadhbh23/SheCodes-React-Weather-App"
            target="_blank"
          >
            open-sourced
          </a>{" "}
          on GitHub
        </footer>
      </div>
    </div>
  );
}
