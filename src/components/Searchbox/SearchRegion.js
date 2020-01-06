import React from 'react';
import Card from 'react-bootstrap/Card';
import Select from "react-dropdown-select";
import { regionOptions } from "./options";

export class SearchRegion extends React.Component {
  render() {
    return (
      <div className="SearchRegion">
          <Card.Text>
        Select one or more regions to search.
          </Card.Text>
          <Select multi options={regionOptions} onChange={(selected) => this.props.onRegionChange(selected)}/>    
      </div>
    );
  }
}