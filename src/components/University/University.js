import React from 'react';
import './University.css';



class University extends React.Component {
  render() {
    return (
      <div className="University">
        <h1>{this.props.university.inst_name}</h1>
        <div className="University-information">
          <div className="University-address">
            <h2>Address</h2>
            <p>{this.props.university.address}</p>
            <p>{this.props.university.city}</p>
            <p>{this.props.university.state_abbr} {this.props.university.zip}</p>
            <h2>Phone Number</h2>
            <p>{this.props.university.phone_number}</p>
          </div>
          <div className="University-data">
            <h2>Data Year: {this.props.university.year}</h2>
          </div>
          </div>
      </div>
    );
  }
}

export default University;