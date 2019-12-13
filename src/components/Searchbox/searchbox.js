import React from 'react';
import './searchbox.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Select from "react-dropdown-select";
import { stateOptions } from "./options";
import { regionOptions } from "./options";
import { urbanOptions } from "./options";

class Searchbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: []
    }

    this.setRegions = this.setRegions.bind(this);
    this.setStates = this.setStates.bind(this);
    this.setUrban = this.setUrban.bind(this);

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

  setUrban(selected) {
    let searchObjects = selected.map(obj => Object.assign({}, {"degree_urbanization": obj.value}));
    this.setState( { 
      selected,
      searchObjects
     });
    console.log(searchObjects);
    
  }

  render() {
    return (
      <div className="Searchbox">
        <div className="SearchLocation">
        <CardDeck>
          <Card className="SearchRegion">
            <Card.Body>
              <Card.Title>Region</Card.Title>
              <Card.Text>
        Select one or more regions to search.
              </Card.Text>
              <Select multi options={regionOptions} onChange={(selected) => this.setRegions(selected)}/>
            </Card.Body>
          </Card>
        
          <Card className="SearchState">
            <Card.Body>
              <Card.Title>State</Card.Title>
              <Card.Text>
        Select one or more states to search.
              </Card.Text>
              <Select multi options={stateOptions} onChange={(values) => this.setStates(values)} />
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>City, Town, or Country</Card.Title>
              <Card.Text>
        Select the size of your ideal college town.
              </Card.Text>
              <Select multi options={urbanOptions} onChange={(values) => this.setUrban(values)} />
            </Card.Body>
          </Card>
        </CardDeck>
        </div>
      </div>
    );
  }
}

export default Searchbox;