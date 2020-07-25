import React, { Component } from "react";

import "./styles/sidebar.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="side">
          <div className='divs'>
            <button className="selected">Home</button>
            <br />
            <button>Trending</button>
            <br />
            <button>Subscription</button>
            <br />
          </div>
          <div className='divs'>
            <button>Library</button>
            <button>History</button>
            <button>Watch Later</button>
            <button>Liked Videos</button>
            <button>YouTube</button>

            <br />
          </div>
          <div className='divs'>
            <button>Library</button>
            <button>History</button>
            <button>Watch Later</button>
            <button>Liked Videos</button>
            <button>YouTube</button>

            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
