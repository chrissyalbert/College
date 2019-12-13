import React from 'react';
import './searchbox.css';

import Card from 'react-bootstrap/Card';
import Select from "react-dropdown-select";
import { regionOptions } from "../Searchbox/options";



class SearchRegion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      searchObjects: []
     }
    this.setRegions = this.setRegions.bind(this);
    
  }

  setRegions(selected) {
    let searchObjects = selected.map(obj => Object.assign({}, {"region_id": obj.value}));
    //this.newArr(selected);
    this.setState( { 
      selected,
      searchObjects
     });
    console.log(searchObjects);
  }

  render() {
    return (
        <div className="SearchRegion">
          <Card>
            <Card.Body>
              <Card.Title>Region</Card.Title>
              <Card.Text>
        Which region of the U.S. would you like to study?
              </Card.Text>
              <Select multi options={regionOptions} onChange={(selected) => this.setSelected(selected)}/>
            </Card.Body>
          </Card>
        </div>
    );
  }
}

export default SearchRegion;