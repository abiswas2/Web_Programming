import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import "../SearchCheckInComponent/SearchCheckInComponent.css";

class Download extends Component {

  constructor(props){
    super(props);
    this.downloadExcel = this.downloadExcel.bind(this);
  }

  downloadExcel(){
    window.location.href = `http://localhost:8000/events/${this.props.location.state.eventName}/download`;
  }

  render() {
    return (
        <div className="home-cont">
          <h1>
              Download the csv and .xlsx files here
          </h1>
          <button className="check-in" onClick={this.downloadExcel}>
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