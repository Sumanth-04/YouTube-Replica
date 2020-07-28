import React, { Component } from "react";

import "./styles/navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="topnav">
        <button>
          <i className="fa fa-fw fa-user fa-lg"></i>
        </button>
        <button>
          <i className="fa fa-fw fa-bell"></i>
        </button>
        <button>
          <i className="fa fa-fw fa-th"></i>
        </button>
        <button>
          <i className="fa fa-fw fa-video-camera"></i>
        </button>
      </div>
    );
  }
}

export default Navbar;
