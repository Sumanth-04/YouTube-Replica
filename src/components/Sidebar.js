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
          
            <button className="selected"><i class="fa fa-fw fa-home fa-lg icon"></i>Home</button>
            <br />
            <button><i class="fa fa-fw fa-fire fa-lg icon"></i>Trending</button>
            <br />
            <button><i class="fa fa-fw fa-bath fa-lg icon"></i>Subscription</button>
            <br />
          </div>
          <div className='divs'>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i>Library</button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i>History</button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i>Watch Later</button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i>Liked Videos</button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i>YouTube</button>

            <br />
          </div>
          <div className='divs'>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i>Library</button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i>History</button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i>Watch Later</button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i>Liked Videos</button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i>YouTube</button>

            <br />
          </div>
          <div className='divs'>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i>Library</button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i>History</button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i>Watch Later</button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i>Liked Videos</button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i>YouTube</button>

            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
