import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import EventsComponent from "./components/EventsComponent/EventsComponent";
import Home from "./components/HomeComponent/HomeComponent";
import SearchCheckIn from "./components/SearchCheckInComponent/SearchCheckInComponent";
import Download from "./components/DownloadComponent/DownloadComponent";
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {routeToEvents: false, eventName: "", eventDesc: ""};
  }


  passEventInfo(eventName, eventDesc){
    if(eventName){
      console.log(eventName);
      this.setState({
        routeToEvents: true,
        eventName: eventName,
        eventDesc: eventDesc
      });
    }
  }

  render(){
    return (
      <Router>
          <HeaderComponent />
          <Route exact path="/events"> 
              <EventsComponent />
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/event-check-in">
            <SearchCheckIn />
          </Route>
          <Route path="/download">
            <Download />
          </Route>
          <FooterComponent />
      </Router>
    );
  }  
}

export default App;
