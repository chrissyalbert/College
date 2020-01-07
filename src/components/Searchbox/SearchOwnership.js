import React from 'react';
import Select from "react-dropdown-select";
import { ownershipOptions } from "./options";

export class SearchOwnership extends React.Component {
  render() {
    return (
      <div className="SearchOwnership">
        <p>
        Select public or private options.
        </p>
        <Select clearOnSelect searchable options={ownershipOptions} onChange={selected => this.props.onOwnershipChange(selected)} />
      </div>
    );
  }
}