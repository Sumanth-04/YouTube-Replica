import logos from "./logo-youtube.png";
import menu from "./menu.png";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count : 5,
      str : "Hello there mate ",
      divisions : []
    };
  }

  render() {
    
    return (
      <div className="App">
        <div className="everything">

          <div className='lefthalf'>
            <div className="menutop">
              <img className="App-menu" src={menu} alt="YouTube" />
              <img className="App-img" src={logos} alt="YouTube" />
            </div>
            <div className="sidebar">
              <Sidebar />
            </div>
          </div>

          <div className='righthalf'>
            <header className="App-header">
              <div>
                <div className="i2">
                  <Searchbar />
                </div>
                <div className="i3">
                  <Navbar />
                </div>
              </div>
            </header>

            <div className="main-body">
              <div className="main-item2">
                <Body />
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default App;
