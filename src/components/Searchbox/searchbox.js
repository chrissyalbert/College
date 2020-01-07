import React from 'react';
import './searchbox.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//import Select from "react-dropdown-select";
import { SearchProgram } from "./SearchProgram";
import { SearchDegree } from "./SearchDegree";
import { SearchState } from "./SearchState";
import { SearchRegion } from "./SearchRegion";
import { SearchOwnership } from "./SearchOwnership";
import { SearchSize } from "./SearchSize";

class Searchbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRegions: null,
      selectedStates: null,
      selectedPrograms: null,
      selectedDegrees: null,
      selectedOwnership: null,
      selectedSize: null
    }
    this.programDegree = false;
    this.setSelected = this.setSelected.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.fixDuplicates = this.fixDuplicates.bind(this); 
    this.onRegionChange = this.onRegionChange.bind(this);
    this.onStateChange = this.onStateChange.bind(this);
    this.onDegreeChange = this.onDegreeChange.bind(this);
    this.onProgramChange = this.onProgramChange.bind(this);
    this.onOwnershipChange = this.onOwnershipChange.bind(this);
    this.onSizeChange = this.onSizeChange.bind(this);
  }

  fixDuplicates(possibleArr) {
    if (possibleArr.length > 1) {
      let prop = Object.getOwnPropertyNames(possibleArr[0]);
      let values = possibleArr.flatMap(element => Object.values(element));
      return Object.assign({}, {[prop]: values});
    }
     return possibleArr.shift();
  }

  setSelected(selected, key, stateObject) {
    let state = selected.map(obj => Object.assign({}, {[key]: obj.value}));
    state = this.fixDuplicates(state);
    console.log(state);
    this.setState({
      [stateObject]: state
    }, () => console.log(this.state));
  }

  onRegionChange(selected) {
    this.setSelected(selected, "school.region_id", "selectedRegions");
  }

  onStateChange(selected) {
    this.setSelected(selected, "school.state_fips", "selectedStates");
  }

  onProgramChange(selected) {
    let string = selected[0].value;
    console.log(string);
    this.setState({
    selectedPrograms: string
    }, () => console.log(this.state));
    this.programDegree = true;  
  }

  onDegreeChange(obj) {
    this.setState({
      selectedDegrees: obj,
      selectedPrograms: null
    }, () => console.log(this.state));
  }

  onOwnershipChange(selected) {
    this.setSelected(selected, "school.ownership", "selectedOwnership");
  }

  onSizeChange(selected) {
    this.setSelected(selected, "latest.student.size__range", "selectedSize")
  }


  handleSearch(event) {
    if (this.state.selectedPrograms && !this.state.selectedDegree ) {
      this.programDegree = true;
      return;
    }
    this.props.searchSchools(this.state);
    event.preventDefault();
  }
/*
<div className="SearchUrban">
                  <Card.Text>
        Select the size of your ideal college town.
              </Card.Text>
              <Select multi options={urbanOptions} onChange={(selected) => this.setSelected(selected, "school.degree_urbanization", "selectedUrbans")} />
                </div>
            */

  render() {
    return (
      <div className="Searchbox">
        <div id="position">
        <CardDeck>
          <Card>
            <Card.Body>
              <Card.Title>Location</Card.Title>
              <SearchRegion selectedRegions={this.state.selectedRegions} onRegionChange={this.onRegionChange} />
              <SearchState selectedStates={this.state.selectedStates} onStateChange={this.onStateChange} />
            </Card.Body>
          </Card>
      
          <Card>
            <Card.Body>
              <Card.Title>Programs and Degrees</Card.Title>
              <SearchProgram selectedPrograms={this.state.selectedPrograms} onProgramChange={this.onProgramChange} />
              {
              this.programDegree && <SearchDegree selectedDegrees={this.state.selectedDegrees} selectedPrograms={this.state.selectedPrograms} onDegreeChange={this.onDegreeChange} />
              } 
            </Card.Body>  
          </Card>

          <Card > 
            <Card.Body>
              <Card.Title>Type of School</Card.Title>
              <SearchOwnership selectedOwnership={this.state.selectedOwnership} onOwnershipChange={this.onOwnershipChange} /> 
              <SearchSize selectedSize={this.state.selectedSize} onSizeChange={this.onSizeChange} />
            </Card.Body>
          </Card>
        </CardDeck>
        </div>
        <Button className="SearchBox-submit" variant='primary' size="lg" block onClick={this.handleSearch}>
          Search Schools
        </Button>
        </div>
      
    );
  }
}

export default Searchbox;
