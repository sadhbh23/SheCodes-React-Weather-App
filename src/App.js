import React from "react";
import SearchEngine from "./SearchEngine";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchEngine defaultCity="Berlin" />
        <footer>
          This project was coded by{" "}
          <a href="https://sadhbhredmond.dev/" target="_blank" rel="noreferrer">
            Sadhbh Redmond
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/sadhbh23/SheCodes-React-Weather-App"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>{" "}
          on GitHub
        </footer>
      </div>
    </div>
  );
}
