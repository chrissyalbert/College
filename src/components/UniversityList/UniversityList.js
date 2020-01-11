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
    this.state = {
      results: null
    }
  }
  componentDidUpdate(prevProps) {
    if ((this.props.universities !== prevProps.universities) && !this.props.universities.length){
      console.log(this.props.universities);
      this.setState({
        results: "noResults"
      });
    }
  }
  render() { 
    if (!this.props.universities) {
      return null;
    }
    if (this.state.results) {
      return <NoResults />;
    }
      return (
        <div className="UniversityList">
          {this.props.universities.map(university => {
            return <University university={university} key={university.id} />;
          })}
        </div>
      );
  }
}

export default UniversityList;

/*

  */