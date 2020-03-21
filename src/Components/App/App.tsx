import React, { Component } from "react";
import "./App.css";
import RandomGenerator from "../RandomGenerator/";
import ImageSaver from "../ImageSaver/";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="appHeader">
          <h1>Nasa Random Picture Picker </h1>
        </header>
        <RandomGenerator />
        <ImageSaver />
      </div>
    );
  }
}

export default App;
