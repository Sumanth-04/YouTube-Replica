import React, { Component } from 'react'
import './styles/sidebarNonExtended.css'
class SidebarNonExtended extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className='aboveSidebar'>
          <div className="Sidebar2" >
         
            <div className='divs'>
            
              <button className="selected"><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'></span></button>
              <br />
              <button ><i class="fa fa-fw fa-fire fa-lg icon"></i><span className='nme'></span></button>
              <br />
              <button><i class="fa fa-fw fa-bath fa-lg icon"></i><span className='nme'></span></button>
              <br />
            </div>
            <div className='divs'>
              <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'></span></button>
              <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'></span></button>
              <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'> </span></button>
              <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'> </span></button>
              <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'></span></button>
  
              <br />
            </div>
            <div className='divs'>
              <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'></span></button>
              <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'></span></button>
              <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'> </span></button>
              <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'> </span></button>
              <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'></span></button>
  
              <br />
            </div>
            <div className='divs'>
              <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'></span></button>
              <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'></span></button>
              <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'> </span></button>
              <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'> </span></button>
              <button><i class="fa fa-fw fa-home fa-lg icon"></i><span className='nme'></span></button>
  
              <br />
            </div>
          </div>
        </div>
      
        )
    }
}

export default SidebarNonExtended
