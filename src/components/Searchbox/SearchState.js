import React from 'react';
import Select from "react-dropdown-select";
import { stateOptions } from "./options";

export class SearchState extends React.Component {
  render() {
    return (
      <div className="SearchState">
        <p>
        Select one or more states to search.
        </p>
        <Select multi options={stateOptions} onChange={selected => this.props.onStateChange(selected)} />
      </div>
    );
  }
}