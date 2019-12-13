import React from 'react';
import './searchbox.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Select from "react-dropdown-select";
import { displayOptions } from "../Searchbox/options";
import SearchRegion from "./searchRegion";


class Searchbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: []
    }
    this.setValues = this.setValues.bind(this);
    //this.regionOptions = [{name: "U.S. Service Schools"}, {name: "New England (CT, ME, MA, NH, RI, VT)"}, {name: "Mid East (DE, CD, MD, NJ, NY, PA)"}, {name: "Great Lakes (IL, IN, MI, OH, WI)"}, {name: "Plains (IA, IKS, MN, MO, NE, ND, SD)"}, {name: "Southeast (AL, AR, FL, GA, KY, LA, MS, NC, SC, TN, VA, WV)"}, {name: "Southwest (AZ, NM, OK, TX)"}, {name: "Rocky Mountains (CO, ID, MT, UT, WY)"}, {name: "Far West (AK, CA, HI, NV, OR, WA)"}, {name: "Outlying Areas (AS, FM, GU, MH, MP, PR, PW, VI)"}];
    this.stateOptions = [
      // no index 0
      "Alabama",
      "Alaska",
      "Arizona", 
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "District of Columbia",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
      "American Samoa",
      "Federated States of Micronesia",
      "Guam",
      "Northern Mariana Islands",
      "Palau",
      "Puerto Rico",
      "Virgin Islands"
    ];
    this.urbanOptions = [
      //no 0 index
      "Large City (a central city of a CMSA or MSA, with the city having a population greater than or equal to 250,000)",	
      "Mid-Size City (a central city of a CMSA or MSA, with the city having a population less than 250,000)",
      "Urban Fringe of a Large City (any territory within a CMSA or MSA of a Large City and defined as urban by the Census Bureau)",	
      "Urban Fringe of a Mid-Size City (any territory within a CMSA or MSA of a Mid-Size City and defined as urban by the Census Bureau)",
      "Large Town (an incorporated place or Census-designated place with a population greater than or equal to 25,000 and located outside a CMSA or MSA)",
      "Small Town (an incorporated place or Census-designated place with a population less than 25,000 and greater than or equal to 2,500 and located outside a CMSA or MSA)",		
      "Rural, Outside MSA (any territory designated as rural by the Census Bureau that is outside a CMSA or MSA of a Large or Mid-Size City)",
      "Rural, Inside MSA (any territory designated as rural by the Census Bureau that is within a CMSA or MSA of a Large or Mid-Size City)",
    ];
  }

  setValues(values) {
    this.setState( {values});
    console.log(values);
    
  }
  
  render() {
    return (
      <div className="Searchbox">
        <div className="SearchLocation">
        <CardDeck>
          <SearchRegion />
          <Card>
            <Card.Body>
              <Card.Title>State</Card.Title>
              <Card.Text>
        Which states would you like to study?
              </Card.Text>
              <Select multi options={this.stateOptions} onChange={(values) => this.setValues(values)} />
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>City, Town, or Country</Card.Title>
              <Card.Text>
        Choose the size of your ideal college town.
              </Card.Text>
              <Select multi options={this.urbanOptions} onChange={(values) => this.setValues(values)} />
            </Card.Body>
          </Card>
</CardDeck>
        </div>
      </div>
    );
  }
}

export default Searchbox;