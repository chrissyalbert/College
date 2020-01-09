import React from 'react';
import Select from "react-dropdown-select";
import { programOptions } from "./options";

export class SearchProgram extends React.Component {
  render() {
    return (
      <div className="SearchProgram">
          <p>
        Select the academic field you want to study. 
          </p>
          <Select options={programOptions} onChange={selected => this.props.onProgramChange(selected)} />
      </div>
    );
  }
}


