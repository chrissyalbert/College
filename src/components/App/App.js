import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import UniversityList from '../UniversityList/UniversityList';
import Searchbox from '../Searchbox/searchbox';
import { Scorecard } from '../../util/scorecard';
import Button from 'react-bootstrap/Button';
import { MoreInfo } from '../MoreInformation/MoreInfo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //universities to display
      universities: null,
      //universities results from scorecard with index 0 the metadata results
      universitiesResults: null,
      searchOn: true,
      moreInfo: null,
      activePage: 1,
      totalPages: null
    }
    this.searchSchools = this.searchSchools.bind(this);
    this.newSearch =this.newSearch.bind(this);
    this.hideSearchbox = this.hideSearchbox.bind(this);
    this.moreInfoSearch = this.moreInfoSearch.bind(this);
    this.setStateAsync = this.setStateAsync.bind(this);
    this.hideUniversityList = this.hideUniversityList.bind(this);
    this.showUniversityList = this.showUniversityList.bind(this);
    this.getTotalPages = this.getTotalPages.bind(this);
    this.handlePageClick =this.handlePageClick.bind(this);
  }
  //get total pages info from metadata results, clear off index 0 for universities
  getTotalPages() {
    if (this.state.universitiesResults) {
      let universitiesResults = this.state.universitiesResults;
      let total = universitiesResults.shift();
      this.setState({ universities: universitiesResults});
      return Math.ceil(total/21);
    }
    return null;
  }
  //passed down to Pages.js
  handlePageClick = number => {
    this.setState({activePage: number});
    let searchboxState = JSON.parse(sessionStorage.SearchboxState1);
    //Results from API's page number starts at 0
    searchboxState.currentPage.page = number - 1;
    this.searchSchools(searchboxState);
  };
  
  hideUniversityList() {
    let universityList = document.getElementById("UniversityList");
    universityList.style.display = "none";
  }

  showUniversityList() {
    this.setState({moreInfo: null});
    let universityList = document.getElementById("UniversityList");
    universityList.style.display = "flex";
  }

  searchSchools(obj) {
    Scorecard.search(obj).then(universitiesResults => {this.setState({universitiesResults})});
    this.hideSearchbox();
  }
  //make sure to get total pages, clean up universities before render
  componentDidUpdate(prevProps, prevState) {
    if (prevState.universitiesResults !== this.state.universitiesResults) {
      let totalPages = this.getTotalPages();
      this.setState({totalPages}
      );
    }
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
    }

  async moreInfoSearch(obj) {
    this.setState({moreInfo: null});
    await Scorecard.moreInfoSearch(obj).then(university => this.setStateAsync({moreInfo: university}));
    this.setState(state => ({
      moreInfo: state.moreInfo.pop()
    }))
  }

  hideSearchbox() {
    this.setState({
      searchOn: false
    });
  }
  //reset state, bring back Searchbox
  newSearch(event) {
    sessionStorage.clear();
    this.setState({
      universities: null,
      universitiesResults: null,
      searchOn: true,
      moreInfo: null,
      totalPages: null,
    });
    event.preventDefault();
  }
 
  render() {
    const searchOn = this.state.searchOn;
    const moreInfo = this.state.moreInfo;
    const universitiesResults = this.state.universities;
    return (
      <Container fluid className="App">
        <header className="App-header">
          <h1>College Costs... What?</h1>
        </header>
        {
          searchOn ? 
          <Jumbotron > 
            <Searchbox 
              searchSchools={universities => this.searchSchools(universities)}  
              activePage={this.state.activePage}/> 
          </Jumbotron> : 
          <Button 
            className="App-submit" variant='primary' size="lg"  onClick={this.newSearch}>
            New Search
          </Button>
        }  
        {
        moreInfo && 
          <MoreInfo 
            university={this.state.moreInfo} 
            hideUniversityList={this.hideUniversityList()} 
            showUniversityList={this.showUniversityList}  /> 
        }
        {
        universitiesResults  && 
          <UniversityList 
            universitiesResults={this.state.universitiesResults} 
            universities={this.state.universities} 
            searchOn={this.state.searchOn} 
            hideSearchbox={this.hideSearchbox} 
            moreInfoSearch={this.moreInfoSearch} 
            totalPages={this.state.totalPages} 
            activePage={this.state.activePage} 
            handlePageClick={this.handlePageClick}
            moreInfo={moreInfo} />
        }
      </Container>
    );
  }
} 
 
export default App;