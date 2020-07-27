import React, { Component } from 'react'
import './styles/menubtn.css'
import logos from "./logo-youtube.png";
class Menubtn extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <div className="menubtn">
                <button className="App-menu" onClick={this.onClick}>
                  <i class="fa fa-fw fa-bars"></i>
                </button>

                <img className="App-img" src={logos} alt="YouTube" />
              </div>
            </div>
        )
    }
}

export default Menubtn
