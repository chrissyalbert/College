import React from 'react';
import './UniversityList.css';
import University from '../University/University';
import  ScrollButton  from "./../App/scrollToTop";
import { Pages } from './Pages';


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

  componentDidMount() {
    if (!this.props.universities.length) {
      this.setState({
        noResults: "noResults"
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if ( (this.props.universities !== prevProps.universities) && !this.props.universities.length){
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
    console.log(this.props.totalPages);
    if (this.state.noResults) {
      return <NoResults />;
    }
    return (
      <>
        {
        !this.props.searchOn && 
          <>
            <div id="UniversityList" >
              {this.props.universities.map(university => {
              return <University 
                university={university} 
                key={university.id} 
                moreInfoSearch={this.props.moreInfoSearch}/>;})}
            </div>
            {(this.props.totalPages>1 && !this.props.moreInfo) && <Pages id="Pages" totalPages={this.props.totalPages} handlePageClick={this.props.handlePageClick}/>}
            <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
          </>
        }
      </>
      );
  }
}

export default UniversityList;

/*
//require("bootstrap/less/bootstrap.less");
{this.props.totalPages && <Pages />}
this.props.universities !== prevProps.universities) ||

if (this.props.universities === prevProps.universities && !this.props.universities.length & prevState === this.state.noResults) {
      this.setState({
        noResults: null
      });
    }
  */