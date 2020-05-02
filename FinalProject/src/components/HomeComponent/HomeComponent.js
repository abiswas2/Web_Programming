import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import "./HomeComponent.css";
import EventService from "../../services/eventsService";


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {value: '', desc: '', toEvent: false, loading: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDesc = this.handleChangeDesc.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleChangeDesc(event) {
    this.setState({desc: event.target.value});
  }

  handleSubmit(event) {
    this.setState({
      loading: true
    });  
    var dataObj = {
      "eventName": this.state.value,
      "description": this.state.desc
    }
    event.preventDefault();
    EventService.postEventService([dataObj]).then( (result) => {
      this.setState({
        loading: false
      }); 
      this.props.history.push({
        pathname: '/events',
        state: { eventName: this.state.value, eventDesc: this.state.desc}
      });
    })
  }

  showSpinner(msg){
    return <div className="spinner"> <h1> {msg} </h1> <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>;
  }

  render() {
    return (
      <div>
          {this.state.loading ? this.showSpinner("Saving your event"): ""}
          <div className={ `home-cont ${this.state.loading ? "hide-element" : ""}` }>
            <h1>
                Create Event
            </h1>
            <form onSubmit={this.handleSubmit}>
              <div className="inputCont">
                  <label>
                    Enter Event name:
                  </label>
                  <input type="text" value={this.state.value} placeholder="Event name" onChange={this.handleChange} />
              </div>
              <div className="inputCont">
                <label>
                  Enter Event Desc:
                </label>
                <input type="text" value={this.state.desc} placeholder="Event description" onChange={this.handleChangeDesc} />
              </div>
              <input type="submit" value="Submit" className="submit-event"/>
            </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);