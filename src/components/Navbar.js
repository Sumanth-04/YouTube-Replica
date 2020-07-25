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
          <i class="fa fa-fw fa-home"></i>{" "}
        </button>
        <button>
          <i class="fa fa-fw fa-search"></i>{" "}
        </button>

        <button>
          <i class="fa fa-fw fa-envelope"></i>
        </button>
        <button>
          <i class="fa fa-fw fa-user"></i>
        </button>
      </div>
    );
  }
}

export default Navbar;
