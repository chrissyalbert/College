import React from 'react';
import './SearchDialog.css';

class SearchDialog extends React.Component {
constructor(props) {
  super(props);
  //this might need to be built out later into objects
  this.state = {
    program: '',
    degree: '',
    location: '',
    size: '',
    type: '',
    sortBy: 'Tuition and Fees'
  };
  this.handleDegreeChange = this.handleDegreeChange.bind(this);
  this.handleLocationChange = this.handleLocationChange.bind(this);
  this.handleProgramChange = this.handleProgramChange.bind(this);
  this.handleSizeChange = this.handleSizeChange.bind(this);
  this.handleTypeChange = this.handleTypeChange.bind(this);
  this.sortByOptions = {
    ///api/v1/college-university/ipeds/directory/{year}/
    'Tuition and Fees': 'TUITIONFEE_IN',
    'Median Salary': 'MD_EARN_WNE_P10',
    'Graduation Rate': 'C150_4_POOLED_SUP',
    'Percent Admitted': 'ADM_RATE',
  };
}

  //returns the current CSS class for a sorting option
  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    } else {
      return '';
    }
  }

  //sets the state of a sorting option
  handleSortByChange(sortByOption) {
    this.setState({
      sortBy: sortByOption,
    });
  }

  handleProgramChange(e) {
    this.setState({
      program: e.target.value
    });
  }

  handleDegreeChange(e) {
    this.setState({
      degree: e.target.value
    });
  }

  handleLocationChange(e) {
    this.setState({
      location: e.target.value
    });
  }

  handleSizeChange(e) {
    this.setState({
      size: e.target.value
    });
  }

  handleTypeChange(e) {
    this.setState({
      type: e.target.value
    });
  }
  
  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)} >{sortByOption}</li>;
    })
  }

  render() {
    return (
      <div className="SearchDialog">
        <div className="SearchDialog-sort-options">
          <ul>
            {this.renderSortByOptions}
          </ul>
        </div>
        <div className="SearchDialog-fields">
          <input placeholder="What type of degree do you want?" onChange={this.handleDegreeChange} />
          <input placeholder="What do you want to study?" onChange={this.handleProgramChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
          <input placeholder="What size school do you want to attend?" onChange={this.handleSizeChange} />
          <input placeholder="What type of school do you want to attend?" onChange={this.handleSizeChange} />
        </div>
        <div className="SearchDialog-submit">
          <a href=''>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchDialog;