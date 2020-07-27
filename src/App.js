import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Sidebar from "./components/Sidebar";
import Menubtn from "./components/Menubtn";

import React, { Component } from "react";
import Body from "./components/Body";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <Menubtn />
          <div className="search">
            <Searchbar />
          </div>
          <div className="nav">
            <Navbar />
          </div>
        </div>
        <Sidebar />
        <Body />
      </div>
    );
  }
}

export default App;
