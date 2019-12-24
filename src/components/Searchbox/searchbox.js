import React from 'react';
import './searchbox.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Select from "react-dropdown-select";

import { stateOptions } from "./options";
import { regionOptions } from "./options";
import { urbanOptions } from "./options";

class Searchbox extends React.Component {
  constructor(props) {
    super(props);
    this.arr = [];
    this.state = {
      selectedRegions: null,
      selectedStates: null,
      selectedUrbans: null,
      
    }

    this.setSelected = this.setSelected.bind(this);
    this.setRegions = this.setRegions.bind(this);
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

  setSelected(selected, property) {
    //let searchObjects = selected.map(obj => Object.assign({}, {[property]: obj.value}));
    //let index = this.state.selected.indexOf([property]);
    let obj = {};
    if (selected) {
      let arr = [];
      for (let i = 0; i < selected.length; i++) {
        arr.push(selected[i].value);
      }
      obj = Object.assign({}, {[property]: arr});
    }
    //let newObj = [this.state.selected][index];
    
    this.setState( { 
      selected: [obj]
     });
     console.log(this.state.selected);
     this.setState({
       searchObjects: [this.state.selected]
     });
    console.log(this.state.searchObjects);
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
              <Select multi options={stateOptions} onChange={selected => this.setSelected(selected, "school.state_fips")} />
            </Card.Body>
          </Card>

          <Card className="SearchUrban"> 
            <Card.Body>
              <Card.Title>City, Town, or Country</Card.Title>
              <Card.Text>
        Select the size of your ideal college town.
              </Card.Text>
              <Select multi options={urbanOptions} onChange={(selected) => this.setSelected(selected, "school.degree_urbanization")} />
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

/*[
  {"school.region_id": null},
  {"school.state_fips": null},
  {"school.degree_urbanization": null},
],

*/