import React, {Component} from "react";
import "./SearchCheckInComponent.css";
import { withRouter } from 'react-router-dom';
import CheckInService from "../../services/checkInService";
// import studentData from "../../Mock/MockData";

class EventsFormComponet extends Component{

    constructor(props){
        super(props);
        if(this.props.location.state){
            this.state = { studentData: this.props.location.state.studentData, filteredData: [], searchValue: "", filters: [] };
        } else{
            this.state = {studentData: []};
        }
        this.toggleFilterSelection = this.toggleFilterSelection.bind(this);
        this.initiateSearch = this.initiateSearch.bind(this);
        this.navigateCheckIn = this.navigateCheckIn.bind(this);
    }

    getKeys = function(){
        return Object.keys(this.state.studentData[0]);
    }

    navigateCheckIn(){
        this.props.history.push({
            pathname: '/download',
            state: { eventName: this.props.location.state.eventName }
        });
    }

    getHeader = function(){
        var keys = this.getKeys();
        return keys.map((key, index)=>{
            return <th key={key}>{key.toUpperCase()}</th>
        })
    }

    renderRows = (rowData,keys) => {
        return keys.map((key, index)=>{
            if(key === "checked_in"){
                return <td key={rowData[key]} className="toggle-cell"> <label className="toggle-switch"> <input checked={rowData["checked_in"]} type="checkbox" onChange={(event) => this.toggleStatus(event, rowData["panther_id"])}/> <span className="slider round"></span> </label> </td>;
            }else{
                return <td key={rowData[key]}>{rowData[key]}</td>;
            }
        })
    }

    getEventRowData = function(){
        var items =  this.state.filteredData.length === 0 ? this.state.studentData: this.state.filteredData;
        var keys = this.getKeys();
        return items.map((row, index)=> {
            return <tr key={index}>{this.renderRows(row,keys)}</tr>
        });
    }

    toggleFilterSelection(event){
        if(this.state.filters.indexOf(event.target.value) === -1){
            var newFilterArray = [];
            newFilterArray.push(event.target.value);
            this.setState({
                filters: newFilterArray
            }, () => {
                this.initiateSearch();
            });
        } else{
            var emptyFilterArray = [];
            this.setState({
                filters: emptyFilterArray
            })
        }
    }

    toggleStatus(event, pantherId){
        var clickedResult;
        if(this.state.filteredData.length !== 0){
            clickedResult = this.state.filteredData.filter((student) => student["panther_id"] === pantherId);
            clickedResult[0].checked_in = event.target.checked;
            var index = this.state.filteredData.findIndex( student => student.panther_id === pantherId);
            var filterCopy = [...this.state.filteredData];
            filterCopy[index] = clickedResult[0];
            this.setState({
                filteredData: filterCopy
            })
            this.updateCheckInStatus(clickedResult[0]);
        } else{
            clickedResult = this.state.studentData.filter((student) => student["panther_id"] === pantherId);
            clickedResult[0].checked_in = event.target.checked;
            this.updateCheckInStatus(clickedResult[0]);
        }
    }

    updateCheckInStatus(studentObj){
        var index = this.state.studentData.findIndex(student => student.panther_id === studentObj.panther_id);
        var studentCopy = [...this.state.studentData];
        studentCopy[index] = studentObj;
        this.setState({
            studentData: studentCopy
        })
        CheckInService( studentObj.panther_id,this.props.location.state.eventName,studentObj.checked_in);
    }

    initiateSearch(event){
        let searchVal
        if(event){
            searchVal = event.target.value;
            this.setState({"searchValue": event.target.value});
        } else{
            searchVal = this.state.searchValue;
        }
        if(searchVal.length >= 3 && this.state.filters.length > 0){
            var filteredResults = [];
            filteredResults = this.state.studentData.filter((student) => student[this.state.filters[0]].toLowerCase().indexOf(searchVal.toLowerCase()) !== -1);
            console.log(filteredResults);
            this.setState({
                filteredData: filteredResults
            });
        } else{
            if(this.state.filteredData.length !== 0){
                this.setState({
                    filteredData: []
                });
            }
        }
    }

    checkFilterSelection(filterName){
        return this.state.filters.indexOf(filterName) === -1;
    }

    render(){
        return (
            <div className = "search-check-in-cont">
                { this.state.studentData.length === 0 ? <h1> No events to check in</h1> : <div> <h1> Search and Check In </h1>
                    <div className="search-input-box">
                        <label>
                            Enter search keyword(3 characters minimum)  
                        </label>
                        <input placeholder="Enter Search Text" 
                            className="search-input" 
                            onChange={this.initiateSearch} 
                        />
                        <button value="first_name" className={ this.checkFilterSelection("first_name") ? "": "selected-filter" } 
                            onClick={this.toggleFilterSelection}> 
                            First Name  
                        </button>
                        <button value="last_name" className={ this.checkFilterSelection("last_name") ? "": "selected-filter" } 
                            onClick={this.toggleFilterSelection}> 
                            Last Name  
                        </button>
                        <button value="panther_id" className={ this.checkFilterSelection("panther_id") ? "": "selected-filter" } 
                            onClick={this.toggleFilterSelection}> 
                            Panther Id  
                        </button>
                    </div>
                    <table>
                        <thead>
                        <tr>
                            {this.getHeader()}
                        </tr>
                        </thead>
                    <tbody> 
                        {this.getEventRowData()}
                    </tbody>
                    </table>
                    <button className="check-in" onClick={this.navigateCheckIn}> Completed Check In </button> 
                </div>
            }
            </div>
        )
    }
}

export default withRouter(EventsFormComponet);