import React from 'react';
import './searchbox.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Select from "react-dropdown-select";
import { stateOptions } from "./options";
import { regionOptions } from "./options";

class Searchbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: []
    }

    this.setRegions = this.setRegions.bind(this);
    this.setStates = this.setStates.bind(this);

    //this.setValues = this.setValues.bind(this);
    
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

  setRegions(selected) {
    let searchObjects = selected.map(obj => Object.assign({}, {"region_id": obj.value}));
    this.setState( { 
      selected,
      searchObjects
     });
    console.log(searchObjects);

  }

  setStates(selected) {
    let searchObjects = selected.map(obj => Object.assign({}, {"state_fips": obj.value}));
    this.setState( { 
      selected,
      searchObjects
     });
    console.log(searchObjects);
    
  }
/*
  setValues(values) {
    this.setState( {values});
    console.log(values);
    
  }
  */
  render() {
    return (
      <div className="Searchbox">
        <div className="SearchLocation">
        <CardDeck>
          <Card className="SearchRegion">
            <Card.Body>
              <Card.Title>Region</Card.Title>
              <Card.Text>
        Which region of the U.S. would you like to study?
              </Card.Text>
              <Select multi options={regionOptions} onChange={(selected) => this.setRegions(selected)}/>
            </Card.Body>
          </Card>
        
          <Card className="SearchState">
            <Card.Body>
              <Card.Title>State</Card.Title>
              <Card.Text>
        Which states of the U.S. would you like to study?
              </Card.Text>
              <Select multi options={stateOptions} onChange={(values) => this.setStates(values)} />
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