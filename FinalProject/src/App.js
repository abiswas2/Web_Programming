import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import EventsComponent from "./components/EventsComponent/EventsComponent";
import Home from "./components/HomeComponent/HomeComponent";
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
          <Route path="/eventHome">
            <Home/>
          </Route>
      </Router>
    );
  }  
}

export default App;
