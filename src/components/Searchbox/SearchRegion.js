import React from 'react';
import Select from "react-dropdown-select";
import { regionOptions } from "./options";

export class SearchRegion extends React.Component {
  render() {
    return (
      <div className="SearchRegion">
          <p>
        Select one or more regions to search.
          </p>
          <Select multi options={regionOptions} onChange={(selected) => this.props.onRegionChange(selected)}/>    
      </div>
    );
  }
}