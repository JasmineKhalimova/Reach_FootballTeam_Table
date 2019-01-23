import React, { Component } from 'react';


class RushingList extends Component {
  render() {
    return (
      <div>
      <input value={this.props.input} onChange={this.props.handleChange}/>
      <table>
      <tr>
        <th>Player</th>
        <th>Team</th>
        <th>Pos</th>
        <th>Att</th>
        <th>Att/G</th>
        <th><button
              onClick={() => this.props.sortBy('Yds')}
            >
            Yds
            </button></th>
        <th>Avg</th>
        <th>Yds/G</th>
        <th><button
              onClick={() => this.props.sortBy('TD')}
            >
            TD
            </button></th>
        <th><button
              onClick={() => this.props.sortBy('Lng')}
            >
            Lng
            </button></th>
        <th>1st</th>
        <th>1st%</th>
        <th>20+</th>
        <th>40+</th>
        <th>FUM</th>
      </tr>
       {this.props.data.map((rushDetail, index)=>{
        return <tr>
         <td>{rushDetail.Player}</td>
         <td>{rushDetail.Team}</td>
         <td>{rushDetail.Pos}</td>
         <td>{rushDetail.Att}</td>
         <td>{rushDetail['Att/G']}</td>
         <td>{rushDetail.Yds}</td>
         <td>{rushDetail.Avg}</td>
         <td>{rushDetail['Yds/G']}</td>
         <td>{rushDetail.TD}</td>
         <td>{rushDetail.Lng}</td>
         <td>{rushDetail['1st']}</td>
         <td>{rushDetail['1st%']}</td>
         <td>{rushDetail['20+']}</td>
         <td>{rushDetail['40+']}</td>
         <td>{rushDetail.FUM}</td>
         </tr>
       })}
      </table>
      </div>
    );
  }
}

export default RushingList;