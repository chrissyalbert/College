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
          <Select clearOnSelect searchable options={programOptions} onChange={selected => this.props.onProgramChange(selected)} />
      </div>
    );
  }
}

/*
this.setState({
    selectedPrograms: [string],
    selectedDegrees: null
  });


{this.programDegree && 
              <span className="attention">
                Please select both academic field and degree type.
              </span>}
              */
