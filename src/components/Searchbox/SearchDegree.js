import React from 'react';
import Select from "react-dropdown-select";
import { degreeProgramOptions } from "./options";

export class SearchDegree extends React.Component {
  render() {
    return (
      <div className="SearchDegree">
        <p>
          Select the type of degree you want to earn. 
         </p>
        <Select options={degreeProgramOptions} onChange={selected => this.props.onDegreeChange(selected)} />
      </div>
    );
  }
}
