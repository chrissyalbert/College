import React from 'react';
import Select from "react-dropdown-select";
import { sizeOptions } from "./options";

export class SearchSize extends React.Component {
  render() {
    return (
      <div className="SearchSize">
        <p>
        Select the size of the school to search.
        </p>
        <Select options={sizeOptions} onChange={selected => this.props.onSizeChange(selected)} />
      </div>
    );
  }
}
