import React, { Component } from "react";

import "./styles/searchbar.css";

class Searchbar extends Component {
  render() {
    return (
      <div className="Searchbar">
        <input type="text" className="txtfld" placeholder="Search" />
        <button className='sbtn'>
          <i className='fa fa-search'></i>
        </button>
      </div>
    );
  }
}

export default Searchbar;
