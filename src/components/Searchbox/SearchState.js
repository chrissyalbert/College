import React from 'react';
import Card from 'react-bootstrap/Card';
import Select from "react-dropdown-select";
import { stateOptions } from "./options";

export class SearchState extends React.Component {
  render() {
    return (
      <div className="SearchState">
        <Card.Text>
        Select one or more states to search.
        </Card.Text>
        <Select multi options={stateOptions} onChange={selected => this.props.onStateChange(selected)} />
      </div>
    );
  }
}