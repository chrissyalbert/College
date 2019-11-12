import React from 'react';
import './SearchDialog.css';

const sortByOptions = {
  'State': 'state_abbr',
  'Size of College': 'inst_size',
  'Degree Type': 'inst_level',
  'Type of School': 'inst_category'
};

class SearchDialog extends React.Component {
  renderSortByOptions() {
    return Object.keys(sortByOptions).map((sortByOption) => {
      const sortByOptionValue =sortByOptions[sortByOption];
      return <li key="{sortByOptionValue}">{sortByOption}</li>;
    })
  }

  render() {
    return (
      <div className="SearchDialog">
        <div className="SearchDialog-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchDialog-fields">
          <input placeholder="Search Colleges" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchDialog-submit">
          <a>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchDialog;