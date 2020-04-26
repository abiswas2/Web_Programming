import React, {Component} from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {value: '', desc: '', toEvent: false};
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
  	this.props.history.push({
           pathname: '/events',
           state: { eventName: this.state.value, eventDesc: this.state.desc}
       });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter Event name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
         <label>
          Enter Event Desc:
          <input type="text" value={this.state.desc} onChange={this.handleChangeDesc} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default withRouter(Home);