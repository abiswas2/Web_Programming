import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import "./HomeComponent.css";
import EventService from "../../services/eventsService";

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {value: '', desc: '', toEvent: false, loading: false, error: "", selectValue: "Academics"};
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDesc = this.handleChangeDesc.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSelectChange(event){
    this.setState({selectValue: event.target.value});
  }
  
  handleChangeDesc(event) {
    this.setState({desc: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault(); 
    
    if(this.state.value !== ""){
      var dataObj = {
        "eventName": this.state.value,
        "description": this.state.desc
      }
      this.setState({
        error: "",
        loading: true
      });
      EventService.postEventService([dataObj]).then( (result) => {
        this.setState({
          loading: false
        }); 
        this.props.history.push({
          pathname: '/events',
          state: { eventName: this.state.value, eventDesc: this.state.desc, eventType: this.state.selectValue}
        });
      })
    } else{
      this.setState({
        error: "***Event Name is required field.***"
      });
    }
  }

  showSpinner(msg){
    return <div className="spinner"> <h1> {msg} </h1> <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>;
  }

  render() {
    return (
      <div>
          {this.state.loading ? this.showSpinner("Saving your event"): ""}
          <div className={ `home-cont ${this.state.loading ? "hide-element" : ""}` }>
            { this.state.error ?  <p className="error">
                {this.state.error}
            </p> : "" } 
            <h1>
                Create Event
            </h1>
            <form onSubmit={this.handleSubmit}>
              <div className="inputCont">
                  <label>
                    Enter Event name:
                  </label>
                  <input type="text" className={(this.state.error !== "") ? "error-input":""} value={this.state.value} placeholder="Event name" onChange={this.handleChange} />
              </div>
              <div className="inputCont">
                <label>
                  Enter Event Desc:
                </label>
                <input type="text" value={this.state.desc} placeholder="Event description" onChange={this.handleChangeDesc} />
              </div>
{/*               <div className="inputCont">
                <label>
                  Enter Type:
                </label>
                <select value={this.state.selectValue} onChange={this.handleSelectChange}>
                  <option value="academics">Academics</option>
                  <option value="sports">Sports</option>
                  <option value="cultural">Cultural</option>
                </select>
              </div> */}
              <input type="submit" value="Submit" className="submit-event"/>
            </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);