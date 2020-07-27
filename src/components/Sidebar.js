import React, { Component } from "react";

import "./styles/sidebar.css";
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {};
  }
  
  onClick(e){
    e.preventDefault();
    console.log("clicked");
  }



  render() {
    return (
      <div className='aboveSidebar'>
        <div className="Sidebar">
       
          <div className='divs'>
          
            <button className="selected"><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>Home</span></button>
            <br />
            <button ><i class="fa fa-fw fa-fire fa-lg icon"></i><span className='nme'>Trending</span></button>
            <br />
            <button><i class="fa fa-fw fa-bath fa-lg icon"></i><span className='nme'>Subscription</span></button>
            <br />
          </div>
          <div className='divs'>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>Library</span></button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>History</span></button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>Watch Later</span></button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>Liked Videos</span></button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>YouTube</span></button>

            <br />
          </div>
          <div className='divs'>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>Library</span></button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>History</span></button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>Watch Later</span></button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>Liked Videos</span></button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>YouTube</span></button>

            <br />
          </div>
          <div className='divs'>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>Library</span></button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>History</span></button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>Watch Later</span></button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>Liked Videos</span></button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>YouTube</span></button>

            <br />
          </div>
        </div></div>
    
    );
  }
}

export default Sidebar;
