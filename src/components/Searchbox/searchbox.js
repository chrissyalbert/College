import React from 'react';
import './searchbox.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Select from "react-dropdown-select";

import { stateOptions, regionOptions, degreeProgramOptions, programOptions } from "./options";

class Searchbox extends React.Component {
  constructor(props) {
    super(props);
    this.arr = [];
    this.state = {
      selectedRegions: null,
      selectedStates: null,
      selectedPrograms: null,
      selectedDegrees: null,
      
      
    }
    this.programDegree = false;
    this.setSelected = this.setSelected.bind(this);
    this.setDegrees = this.setDegrees.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.fixDuplicates = this.fixDuplicates.bind(this);
    this.setPrograms = this.setPrograms.bind(this);
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

  
/*
let programDegree = false;

*/

  setPrograms(selected) {
    
      let string = selected[0].value;
      console.log(string);
      
      this.setState({
      selectedPrograms: [string],
      selectedDegrees: null
    }, () => console.log(this.state));
      //this.setDegrees([]);
      if (!this.state.selectedDegrees) {
        this.programDegree = true;
      }
  }
  

  setDegrees(selected) {
    console.log(selected);
    let string = selected[0].value;
    console.log(string);
    if (this.state.selectedPrograms) {
      
      
      string += this.state.selectedPrograms;
      let obj = Object.assign({}, {[string]: 1})
      console.log(obj);
      this.setState({
        selectedDegrees: obj,
        selectedPrograms: null
      }, () => console.log(this.state));
      this.programDegree = false;
      //this.setPrograms([]);
    }
    //let selectedDegrees = selected[0].value;
    //console.log(selectedDegrees);
    this.programDegree = true;
    //this.setPrograms([]);
    return;
    /*
    let selectedDegrees = selected.map(obj => Object.assign({}, {"school.degrees_awarded.predominant": obj.value}));
    selectedDegrees = this.fixDuplicates(selectedDegrees);
    this.setState({
      selectedDegrees
    }, () => console.log(this.state));
    */
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
                <div className="SearchRegion">
                  <Card.Text>
        Select one or more regions to search.
                  </Card.Text>
                  <Select multi options={regionOptions} onChange={(selected) => this.setSelected(selected, "school.region_id", "selectedRegions")}/>    
                </div>
                <div className="SearchState">
                  <Card.Text>
        Select one or more states to search.
                  </Card.Text>
                  <Select multi options={stateOptions} onChange={selected => this.setSelected(selected, "school.state_fips", "selectedStates")} />
                </div>
                
              </Card.Body>
          </Card>
      
          <Card>
            <Card.Body>
            <Card.Title>Degrees And Programs</Card.Title>
            <div className="SearchProgram">
              {this.programDegree && 
              <span className="attention">
                Please select both academic field and degree type.
              </span>} 
              <Card.Text>
        Select the academic field you want to study. 
              </Card.Text>
              <Select clearOnSelect searchable options={programOptions} onChange={selected => this.setPrograms(selected)} />
            </div>
            <div className="SearchDegree">
              <Card.Text>
        Select the type of degree you want to earn. 
              </Card.Text>
              <Select clearOnSelect searchable options={degreeProgramOptions} onChange={selected => this.setDegrees(selected)} />
            </div>
            
            </Card.Body>  
          </Card>

          <Card > 
            <Card.Body>
            <Card.Title>Type of School</Card.Title>
              
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
