import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import "./EventsComponent.css";
import EventsForm from "../EventsFormComponent/EventsFormComponent";

class Events extends Component {
  
  constructor(props) {
    super(props);
    if(this.props.location.state){
    	this.state = { eventName: this.props.location.state.eventName, eventDesc: this.props.location.state.eventDesc};
    } else {
    	this.state = { eventName: "", showForm: false};
    }
    this.openEventUploadModal = this.openEventUploadModal.bind(this);
  }

  openEventUploadModal(){
    this.setState({showForm : true});
  }

  render() {
    return <div>
            <h1> Events Page. Events Created are shown below </h1>
            { this.state.showForm ? <EventsForm  eventName={this.state.eventName} /> : ""}
            <div className="event-card">
              <button className="event-btn" onClick= { this.openEventUploadModal }>
                <h1 className="event-name"> { this.state.eventName } </h1> 
                <p className="event-desc"> {this.state.eventDesc} </p>
              </button>
            </div>;
          </div>
  }
}

export default withRouter(Events);