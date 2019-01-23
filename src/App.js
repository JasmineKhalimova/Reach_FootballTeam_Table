import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RushingList from './rushing/RushingList';
import data from './data/rushing.json';
import autoBind from 'react-autobind';
import {CSVLink, CSVDownload} from 'react-csv';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data,
      input:"",
      direction: {
        price_usd: 'asc',
      }
    }

    autoBind(this);

    this.sortBy = this.sortBy.bind(this)
  }

   handleChange(event){
            this.setState({
                input:event.target.value
            });
        }

  sortBy(key) {
    this.setState({
      data: data.sort( (a, b) => (
        this.state.direction[key] === 'asc'
          ? parseFloat(a[key]) - parseFloat(b[key])
          : parseFloat(b[key]) - parseFloat(a[key]) 
      )),
      direction: {
        [key]: this.state.direction[key] === 'asc'
          ? 'desc'
          : 'asc'
      }
    })
  }

  render() {
  	let filteredData = this.state.data.filter(
        (rushDetail)=>{
          return rushDetail.Player.indexOf(this.state.input) !== -1;
        });
    return (
      <div
        className="page-container"
      >
      <CSVLink data = {filteredData}> Download CSV </CSVLink>
        <RushingList
          data={filteredData}
          sortBy={this.sortBy}
          input = {this.state.input}
          handleChange = {this.handleChange}
        />
      </div>
    )
  }
}


export default App;
