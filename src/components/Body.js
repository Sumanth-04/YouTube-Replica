import React, { Component } from "react";
import Body2 from "./BodyExpanded";
//import "./styles/body.css";
import Body3 from "./BodyNonExpanded";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { TurnOn, TurnOff } from "../Actions/TurnMenuSwitch";
class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.val === true) {
      return <Body2 />;
    }

    return <Body3 />;
  }
}

Body.propTypes = {
  TurnOff: PropTypes.func.isRequired,
  TurnOn: PropTypes.func.isRequired,
  val: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  val: state.Turn,
});

export default connect(mapStateToProps, { TurnOff, TurnOn })(Body);
