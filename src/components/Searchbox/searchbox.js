import React from 'react';
import './searchbox.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Select from "react-dropdown-select";

import { stateOptions, regionOptions, degreeOptions, programOptions } from "./options";

class Searchbox extends React.Component {
  constructor(props) {
    super(props);
    this.arr = [];
    this.state = {
      selectedRegions: null,
      selectedStates: null,

      selectedDegrees: null,
      selectedPrograms: null
      
    }
    this.setSelected = this.setSelected.bind(this);
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

  setSelected(selected, key, stateObject) {
    let state = selected.map(obj => Object.assign({}, {[key]: obj.value}));
    state = this.fixDuplicates(state);
    console.log(state);
    this.setState({
      [stateObject]: state
    }, () => console.log(this.state));
  }

  setDegrees(selected) {
    //console.log(selected);
    let selectedDegrees = selected.map(obj => Object.assign({}, {"school.degrees_awarded.predominant": obj.value}));
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
/*
<div className="SearchProgram">
            <Card.Body>
              <Card.Text>
        Select the academic field you want to study. 
              </Card.Text>
              <Select multi options={programOptions} onChange={selected => this.setPrograms(selected)} />
            </Card.Body>
            </div>

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
            <div className="SearchDegree">
              <Card.Text>
        Select the type of degree you want to earn. 
              </Card.Text>
              <Select multi options={degreeOptions} onChange={selected => this.setDegrees(selected)} />
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
