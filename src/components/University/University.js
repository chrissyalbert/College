import React from 'react';
import './University.css';

const university = {
  unitid: 100636,
  year: 2003,
  inst_name: "Community College of the Air Force",
  address: "130 W Maxwell Blvd",
  state_abbr: "AL",
  fips: 1,
  zip: "36112-6613",
  phone_number: "3349536436",
  city: "Montgomery",
};

class University extends React.Component {
  render() {
    return (
      <div className="University">
        <h1>{university.inst_name}</h1>
        <div className="University-information">
          <div className="University-address">
            <h2>Address</h2>
            <p>{university.address}</p>
            <p>{university.city}</p>
            <p>{university.state_abbr} {university.zip}</p>
            <h2>Phone Number</h2>
            <p>{university.phone_number}</p>
          </div>
          <div className="University-data">
            <h2>Data from Year: {university.year}</h2>
          </div>
          </div>
      </div>
    );
  }
}

export default University;