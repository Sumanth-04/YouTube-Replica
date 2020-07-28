import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { TurnOn, TurnOff } from "../Actions/TurnMenuSwitch";
import "./styles/menubtn.css";
import logos from "./logo-youtube.png";

class Menubtn extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {};
  }

  onClick = (e) => {
    e.preventDefault();
    if (this.props.val) {
     
      this.props.TurnOff();
    } else {
      this.props.TurnOn();
    }
  };

  render() {
    return (
      <div>
        <div className="menubtn">
          <button className="App-menu" onClick={this.onClick}>
            <i className="fa fa-fw fa-bars"></i>
          </button>

          <img className="App-img" src={logos} alt="YouTube" />
        </div>
      </div>
    );
  }
}

Menubtn.propTypes = {
  TurnOff: PropTypes.func.isRequired,
  TurnOn: PropTypes.func.isRequired,
  val: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  val: state.Turn,
});

export default connect(mapStateToProps, { TurnOff, TurnOn })(Menubtn);
