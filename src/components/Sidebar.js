import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { TurnOn, TurnOff } from "../Actions/TurnMenuSwitch";
import "./styles/sidebar.css";
import SidebarNonExtended from './SidebarNonExtended';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tags : [],
      number : 10 ,
      value : true
    };
  }
  


  render() {
    if(this.props.val===true){

      return (
        <SidebarNonExtended />
      );
    }
    
    return (
      <div className='aboveSidebar'>
        <div className="Sidebar">
       
          <div className='divs'>
          
            <button className="selected"><i className="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>Home</span></button>
            <br />
            <button ><i className="fa fa-fw fa-fire fa-lg icon"></i><span className='nme'>Trending</span></button>
            <br />
            <button><i className="fa fa-fw fa-bath fa-lg icon"></i><span className='nme'>Subscription</span></button>
            <br />
          </div>
          <div className='divs'>
            <button><i className="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>Library</span></button>
            <button><i className="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>History</span></button>
            <button><i className="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>Watch Later</span></button>
            <button><i className="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>Liked Videos</span></button>
            <button><i className="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>YouTube</span></button>

            <br />
          </div>
          <div className='divs'>
            <button><i className="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>Library</span></button>
            <button><i className="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>History</span></button>
            <button><i className="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>Watch Later</span></button>
            <button><i className="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>Liked Videos</span></button>
            <button><i className="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>YouTube</span></button>

            <br />
          </div>
          <div className='divs'>
            <button><i className="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>Library</span></button>
            <button><i className="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>History</span></button>
            <button><i className="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>Watch Later</span></button>
            <button><i className="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>Liked Videos</span></button>
            <button><i className="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>YouTube</span></button>

            <br />
          </div>
        </div></div>
    
    );
  }
}

Sidebar.propTypes = {
  TurnOff: PropTypes.func.isRequired,
  TurnOn: PropTypes.func.isRequired,
  val: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  val: state.Turn,
});

export default connect(mapStateToProps, { TurnOff, TurnOn })(Sidebar);
