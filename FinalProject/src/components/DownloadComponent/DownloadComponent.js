import React, {Component} from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import "../SearchCheckInComponent/SearchCheckInComponent.css";

class Download extends Component {

  render() {
    return (
        <div className="home-cont">
          <h1>
              Download the csv and .xlsx files here
          </h1>
          <button className="check-in">
              Download with all status
          </button>
          <button className="check-in">
              Download with checked-in status
          </button>
          <button className="check-in">
              Download with non checked-in status
          </button>
        </div>
    );
  }
}

export default withRouter(Download);