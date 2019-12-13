import React from 'react';
import './searchbox.css';

import Card from 'react-bootstrap/Card';
import Select from "react-dropdown-select";
import { stateOptions } from "../Searchbox/options";



class SearchState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      searchObjects: []
     }
    this.setSelected = this.setSelected.bind(this);
    
  }

  setStates(selected) {
    let searchObjects = selected.map(obj => Object.assign({}, {"state_fips": obj.value}));
    this.setState( { 
      selected,
      searchObjects
     });
    console.log(searchObjects);
    
  }

  render() {
    return (   
        
        <Card className="SearchState">
            <Card.Body>
              <Card.Title>State</Card.Title>
              <Card.Text>
        Which states would you like to study?
              </Card.Text>
              <Select multi options={stateOptions} onChange={(values) => this.setValues(values)} />
            </Card.Body>
          </Card>
        
     
    );
  }
}

export default SearchState;