import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import "./EventsComponent.css";
import "../../Loading.css";
import EventsForm from "../EventsFormComponent/EventsFormComponent";
import EventsService from '../../services/eventsService';

class Events extends Component {
  
  constructor(props) {
    super(props);
    if(this.props.location.state){
      console.log(this.props.location.state.eventType);
      this.state = { eventName: this.props.location.state.eventName, eventDesc: this.props.location.state.eventDesc, showForm: false, events: []};
    } else{
      this.state = { eventName: "", eventDesc: "", showForm: false, events: []};
    }
    this.openEventUploadModal = this.openEventUploadModal.bind(this);
  }

  componentDidMount() {
    EventsService.getEventService().then((res) => {
      console.log(res.data.events);
      this.setState({
        events: res.data.events
      });
    })
  }

  openEventUploadModal(){
    this.setState({showForm : true});
  }

  closeModal = (showFormState) => {
    this.setState({showForm: showFormState});
  }

  createEventCards = () => {
    if(this.state.events.length > 0){
      var eventsToShow = this.state.events;
      return eventsToShow.map((event, index)=> {
        if(event.eventName === this.state.eventName) {
          return <div className={`event-create-card ${this.props.location.state.eventType}`} key={index} onClick= { this.openEventUploadModal }>
                  <h1 className="new-event-name"> { this.state.eventName } </h1> 
                  <p className="new-event-desc"> { this.state.eventDesc } </p>
                  <button className="event-btn">
                  </button>
                </div>;
        } else{
          return <div className="event-card" key={index}>
                    <button className="event-btn">
                      <h1 className="event-name"> { event.eventName.toUpperCase() } </h1> 
                      <p className="event-desc"> {event.description } </p>
                      <p className="event-name"> UPLOADED </p>
                    </button>
                  </div>;
        }
      });
    }
  }

  showSpinner(msg){
    if(this.state.events.length === 0){
      return <div className="spinner"> <h1> {msg} </h1> <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>;
    } else{
      return "";
    }
  }

  render() {
    return <div>
            { this.state.showForm ? <EventsForm  eventName={this.state.eventName} closeModal={this.closeModal}/> : ""}
            {this.createEventCards()}
            <div className="spinner">
              {this.showSpinner("Loading Your Events ") }
            </div>
          </div>
  }
}

export default withRouter(Events);