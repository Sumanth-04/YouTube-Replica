import React, { Component } from "react";

import "./styles/navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="topnav">
        <button>
          <i class="fa fa-fw fa-user fa-lg"></i>
        </button>
        <button>
          <i class="fa fa-fw fa-bell"></i>
        </button>

        <button>
          <i class="fa fa-fw fa-video-camera"></i>
        </button>
        <button>
          <i class="fa fa-fw fa-th"></i>
        </button>
      </div>
    );
  }
}

export default Navbar;
