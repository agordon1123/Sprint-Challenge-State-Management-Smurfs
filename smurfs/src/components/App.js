import React, { Component } from "react";
import "./App.css";
import SmurfList from "./SmurfList";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>Welcome to Smurf Village!</h1>
        <SmurfList />
      </div>
    );
  }
}

export default App;
