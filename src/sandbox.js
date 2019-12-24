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
    this.searchArr = []
    this.state = {
      values: [],
      searchObjects: []
    }
    
    this.setSelected = this.setSelected.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

var joined = this.state.selected.concat('new value');
//this.setState({ myArray: joined })

  setSelected(selected, property) {
    //console.log(selected);
    //let searchArr = [];
    let selectedObject;
    if (selected) {
      let arr = [];
      for (let i = 0; i < selected.length; i++) {
        arr.push(selected[i].value);
      }
      selectedObject = Object.assign({}, {[property]: arr});
      
    }

    //let searchArr = this.state.searchObjects.concat(selectedObject);
    this.setState( {
      searchObjects: searchArr
     });
    //console.log(searchObjects);
  }

  handleSearch(event) {
    //console.log(this.state.searchObjects);
    this.props.searchSchools(this.state.searchObjects);
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
              <Select multi options={regionOptions} onChange={(selected) => this.setSelected(selected, "school.region_id")}/>
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