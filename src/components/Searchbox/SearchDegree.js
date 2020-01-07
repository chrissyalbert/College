import React from 'react';
import Select from "react-dropdown-select";
import { degreeProgramOptions } from "./options";

export class SearchDegree extends React.Component {
  constructor(props) {
    super(props);
    this.setDegrees = this.setDegrees.bind(this);
  }

  setDegrees(selected) {
    console.log(selected);
    let string = selected[0].value;
    console.log(string);
    console.log(this.props.selectedPrograms);
    string += this.props.selectedPrograms;
    let obj = Object.assign({}, {[string]: 1})
    console.log(obj);
    this.props.onDegreeChange(obj);
  }

  render() {
    return (
      <div className="SearchDegree">
        <p>
          Select the type of degree you want to earn. 
         </p>
        <Select clearOnSelect searchable options={degreeProgramOptions} onChange={selected => this.setDegrees(selected)} />
      </div>
    );
  }
}