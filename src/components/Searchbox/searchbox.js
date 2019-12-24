import React from 'react';
import './searchbox.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Select from "react-dropdown-select";

import { stateOptions } from "./options";
import { regionOptions } from "./options";
import { urbanOptions } from "./options";
import { degreeOptions } from "./options";

class Searchbox extends React.Component {
  constructor(props) {
    super(props);
    this.arr = [];
    this.state = {
      selectedRegions: null,
      selectedStates: null,
      selectedUrbans: null,
      selectedDegrees: null
      
    }

    this.setRegions = this.setRegions.bind(this);
    this.setStates = this.setStates.bind(this);
    this.setUrbans = this.setUrbans.bind(this);
    this.setDegrees = this.setDegrees.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.fixDuplicates = this.fixDuplicates.bind(this);

  }

  fixDuplicates(possibleArr) {
    if (possibleArr.length > 1) {
      let prop = Object.getOwnPropertyNames(possibleArr[0]);
      let values = possibleArr.flatMap(element => Object.values(element));
      return Object.assign({}, {[prop]: values});
    }
     return possibleArr.shift();
  }

  setRegions(selected) {
    //console.log(selected);
    let selectedRegions = selected.map(obj => Object.assign({}, {"school.region_id": obj.value}));
    selectedRegions = this.fixDuplicates(selectedRegions);
    console.log(selectedRegions);
    this.setState({
      selectedRegions
    }, () => console.log(this.state));
  }

  setStates(selected) {
    //console.log(selected);
    let selectedStates = selected.map(obj => Object.assign({}, {"school.state_fips": obj.value}));
    selectedStates = this.fixDuplicates(selectedStates);
    console.log(selectedStates);
    this.setState({
      selectedStates
    }, () => console.log(this.state));
  }

  setUrbans(selected) {
    //console.log(selected);
    let selectedUrbans = selected.map(obj => Object.assign({}, {"school.degree_urbanization": obj.value}));
    selectedUrbans = this.fixDuplicates(selectedUrbans);
    console.log(selectedUrbans);
    this.setState({
      selectedUrbans
    }, () => console.log(this.state));
  }

  setDegrees(selected) {
    //console.log(selected);
    let selectedDegrees = selected.map(obj => Object.assign({}, {"degrees_awarded.highest": obj.value}));
    selectedDegrees = this.fixDuplicates(selectedDegrees);
    console.log(selectedDegrees);
    this.setState({
      selectedDegrees
    }, () => console.log(this.state));
  }

  handleSearch(event) {
    this.props.searchSchools(this.state);
    event.preventDefault();
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
              <Select multi options={stateOptions} onChange={selected => this.setStates(selected)} />
            </Card.Body>
          </Card>

          <Card className="SearchUrban"> 
            <Card.Body>
              <Card.Title>City, Town, or Country</Card.Title>
              <Card.Text>
        Select the size of your ideal college town.
              </Card.Text>
              <Select multi options={urbanOptions} onChange={(selected) => this.setUrbans(selected)} />
            </Card.Body>
          </Card>

          <Card className="SearchDegree">
            <Card.Body>
              <Card.Title>Degree</Card.Title>
              <Card.Text>
        Select the type of degree you wan to earn. 
              </Card.Text>
              <Select multi options={degreeOptions} onChange={selected => this.setDegrees(selected)} />
            </Card.Body>
          </Card>


        </CardDeck>
        <Button className="SearchBox-submit" variant='dark' size="lg" block onClick={this.handleSearch}>
          Search Schools
        </Button>
        </div>
      </div>
    );
  }
}

export default Searchbox;
