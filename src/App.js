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
     
    };
  }
  
  render() {
  
    return (
      <div className="App">
        <div className="everything">
          <div className="lefthalf">
            
            <div className="sidebar">
              <Sidebar />
            </div>
          </div>

          <div className="righthalf">
            <header className="App-header">
              <div className='fixing'>
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
