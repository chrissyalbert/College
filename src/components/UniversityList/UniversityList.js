import React from 'react';
import './UniversityList.css';
import University from '../University/University';

function NoResults() {
  return (
    <div className="noResults">
      <p>No results were found for your search criteria. Please expand your search options by choosing more locations(region and/or states). Please note that choosing school public/private or school size options narrows search results.</p>
    </div>
  );
}

class UniversityList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidUpdate(prevProps, prevState) {
    if ((this.props.universities !== prevProps.universities) && !this.props.universities.length){
      console.log(this.props.universities);
      this.setState({
        noResults: "noResults"
      });
    }
  
    if (this.props.searchOn && prevState.noResults) {
      this.setState({
        noResults: null
      });
    }
  }

  render() { 
    if (this.state.noResults) {
      return <NoResults />;
    }
    
    return (
      <div>
        {!this.props.searchOn && <div className="UniversityList" id="UniversityList" >
          {this.props.universities.map(university => {
            return <University university={university} key={university.id} moreInfoSearch={this.props.moreInfoSearch}/>;
          })}
          </div>}
        </div>
      );
  }
}

export default UniversityList;

/*
if (this.props.universities === prevProps.universities && !this.props.universities.length & prevState === this.state.noResults) {
      this.setState({
        noResults: null
      });
    }
  */