import React, { Component } from "react";

import "./styles/sidebar.css";
import logos from "./logo-youtube.png";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {};
  }
  
  onClick(e){
    e.preventDefault();
    console.log("clicked");
    var wid = document.querySelector(".side").style.width;
    var every = document.querySelector(".everything").style.width;
    //console.log(wid);console.log(every);
    if(wid === "") wid = "20%";
    if(every === "") every = "80%";console.log(wid);console.log(every);
    if (wid === "20%"){
      document.querySelector(".side").style.width = "6%";
      //document.querySelector(".everything").style.width = "94%";
      document.querySelector(".nme").style.display = "none";
      document.querySelector(".nme2").style.display = "none";
      document.querySelector(".nme3").style.display = "none";
      document.querySelector(".nme4").style.display = "none";
      document.querySelector(".nme5").style.display = "none";

      document.querySelector(".nme6").style.display = "none";
      document.querySelector(".nme7").style.display = "none";
      document.querySelector(".nme8").style.display = "none";

      document.querySelector(".nme9").style.display = "none";
      document.querySelector(".nme10").style.display = "none";

      document.querySelector(".nme11").style.display = "none";
      document.querySelector(".nme12").style.display = "none";
      document.querySelector(".nme13").style.display = "none";

      document.querySelector(".nme14").style.display = "none";
      document.querySelector(".nme15").style.display = "none";
      document.querySelector(".nme16").style.display = "none";
      document.querySelector(".nme17").style.display = "none";
      document.querySelector(".nme18").style.display = "none";
    }else{
      document.querySelector(".side").style.width = "20%";
      //document.querySelector(".everything").style.width = "80%";
      document.querySelector(".nme").style.display = "inline";
      document.querySelector(".nme2").style.display = "inline";
      document.querySelector(".nme3").style.display = "inline";
      document.querySelector(".nme4").style.display = "inline";
      document.querySelector(".nme5").style.display = "inline";

      document.querySelector(".nme6").style.display = "inline";
      document.querySelector(".nme7").style.display = "inline";
      document.querySelector(".nme8").style.display = "inline";

      document.querySelector(".nme9").style.display = "inline";
      document.querySelector(".nme10").style.display = "inline";

      document.querySelector(".nme11").style.display = "inline";
      document.querySelector(".nme12").style.display = "inline";
      document.querySelector(".nme13").style.display = "inline";

      document.querySelector(".nme14").style.display = "inline";
      document.querySelector(".nme15").style.display = "inline";
      document.querySelector(".nme16").style.display = "inline";
      document.querySelector(".nme17").style.display = "inline";
      document.querySelector(".nme18").style.display = "inline";
    }
    
  }
  render() {
    return (
      <div>
        <div className="menutop">
              <button className='App-menu' onClick={this.onClick} >
                <i class="fa fa-fw fa-bars"></i>
              </button>
              
              <img className="App-img" src={logos} alt="YouTube" />
            </div>
        <div className="side">
          <div className='divs'>
          
            <button className="selected"><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'>Home</span></button>
            <br />
            <button ><i class="fa fa-fw fa-fire fa-lg icon"></i><span className='nme2'>Trending</span></button>
            <br />
            <button><i class="fa fa-fw fa-bath fa-lg icon"></i><span className='nme3'>Subscription</span></button>
            <br />
          </div>
          <div className='divs'>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme4'>Library</span></button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme5'>History</span></button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme6'>Watch Later</span></button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme7'>Liked Videos</span></button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme8'>YouTube</span></button>

            <br />
          </div>
          <div className='divs'>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme9'>Library</span></button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme10'>History</span></button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme11'>Watch Later</span></button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme12'>Liked Videos</span></button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme13'>YouTube</span></button>

            <br />
          </div>
          <div className='divs'>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme14'>Library</span></button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme15'>History</span></button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme16'>Watch Later</span></button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme17'>Liked Videos</span></button>
            <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme18'>YouTube</span></button>

            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
