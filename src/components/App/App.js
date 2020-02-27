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
      universities: null,
      searchOn: true,
      moreInfo: null
    }
    this.searchSchools = this.searchSchools.bind(this);
    this.newSearch =this.newSearch.bind(this);
    this.hideSearchbox = this.hideSearchbox.bind(this);
    this.moreInfoSearch = this.moreInfoSearch.bind(this);
    this.setStateAsync = this.setStateAsync.bind(this);
    this.hideUniversityList = this.hideUniversityList.bind(this);
    this.showUniversityList = this.showUniversityList.bind(this);
  }


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
    Scorecard.search(obj).then(universities => {this.setState({universities})});
    this.hideSearchbox();
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
    console.log(this.state);
  }

  hideSearchbox() {
    this.setState({
      searchOn: false
    });
  }

  newSearch(event) {
    this.setState({
      universities: null,
      searchOn: true,
      moreInfo: null,
      
    }, () => console.log(this.state));
    event.preventDefault();
    sessionStorage.clear();
  }
 
  render() {
    const searchOn = this.state.searchOn;
    const moreInfo = this.state.moreInfo;
    return (
      <Container fluid className="App">
        <header className="App-header">
          <h1>College Costs... What?</h1>
        </header>
        {
          searchOn ? <Jumbotron > <Searchbox searchSchools={universities => this.searchSchools(universities)}  /> </Jumbotron> : 
          <Button className="App-submit" variant='primary' size="lg"  onClick={this.newSearch}>
            New Search
          </Button>
        }  
        {
        moreInfo && <MoreInfo university={this.state.moreInfo} hideUniversityList={this.hideUniversityList()} showUniversityList={this.showUniversityList}  /> }
          {this.state.universities  && <UniversityList universities={this.state.universities} searchOn={this.state.searchOn} hideSearchbox={this.hideSearchbox} moreInfoSearch={this.moreInfoSearch}/>}
      </Container>
    );
  }
} 
 
export default App;
