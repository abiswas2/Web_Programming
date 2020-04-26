import React, {Component} from "react";
import UploadEventData from "../../services/eventUploadService";
import "./EventsFormComponent.css";

class EventsFormComponet extends Component{

    constructor(props){
        super(props);
        this.state =   {eventUploadObj: {}};
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleEvenFormSubmit = this.handleEvenFormSubmit.bind(this);
    }

    handleOnChange = (e) => {
        let { name, value} = e.target;
        if(e.target.files){
            value = e.target.files[0];
        }
        console.log( `name:: ${name} value::: ${value}`);
        this.setState(prevState => {
            let eventUploadObj = Object.assign({}, prevState.eventUploadObj);  
            eventUploadObj[name] = value;
            return { eventUploadObj };                             
            });
    }

    handleEvenFormSubmit(e){
        e.preventDefault();
        console.log(this.state.eventUploadObj);
        const data = new FormData();
        //data.append("eventYear", this.state.eventUploadObj.eventYear);
        data.append('file', this.state.eventUploadObj.studentFile);
        UploadEventData(data);
    }

    render(){
        return (
            <div className= "eventsFormModal modal">
                <button className="modal-close" onClick="this.closeModal()"> </button>
                <form name="eventsUploadForm" id="eventUploadForm" onSubmit={this.handleEvenFormSubmit}>
                    <h2> Event: { this.props.eventName} </h2>
                    <div className="inputCont">
                        <label htmlFor="eventYear"> 
                            Year
                        </label>
                        <input name="eventYear" id="eventYear" onChange={this.handleOnChange}></input>
                        <label htmlFor="semester"> 
                            Semester
                        </label>
                        <input name="eventType" id="semester" onChange={this.handleOnChange}></input>
                    </div>
                    <div className="inputCont">
                        <label htmlFor="aboutEvent" > About Event(optional) </label>
                        <textarea name="comment" form="usrform" id="eventUploadForm" onChange={this.handleOnChange}></textarea>
                    </div>
                    <div className="inputCont">
                        <label htmlFor="eventDate"> 
                            Event Date
                        </label>
                        <input type="date" name="eventType" id="eventDate" onChange={this.handleOnChange}></input>
                        <label htmlFor="eventLocation"> 
                            Event Location
                        </label>
                        <input type="date" name="eventLocation" id="eventLocation" onChange={this.handleOnChange}></input>
                    </div>
                    <div className="inputCont">
                        <input type="file" name="studentFile" onChange={this.handleOnChange} accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" />
                    </div>
                    <input type="submit" value="Submit Event Info" />
                </form>
            </div>
        )
    }
}

export default EventsFormComponet;