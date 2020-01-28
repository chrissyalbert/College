import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import UniversityList from '../UniversityList/UniversityList';
import Searchbox from '../Searchbox/searchbox';
import { Scorecard } from '../../util/scorecard';
import Button from 'react-bootstrap/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      universities: [],
      searchOn: true,
      moreInfo: null
    }
    this.searchSchools = this.searchSchools.bind(this);
    this.newSearch =this.newSearch.bind(this);
    this.hideSearchbox = this.hideSearchbox.bind(this);
    this.moreInfoSearch = this.moreInfoSearch.bind(this);
    this.setStateAsync = this.setStateAsync.bind(this);
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
    await Scorecard.moreInfoSearch(obj).then(university => this.setStateAsync({moreInfo: university}));
    console.log(this.state);
  }

  hideSearchbox() {
    this.setState({
      searchOn: false
    });
  }

  newSearch(event) {
    this.setState({
      searchOn: true
    }, () => console.log(this.state));
    event.preventDefault();
    sessionStorage.clear();
  }
 
  render() {
    const searchOn = this.state.searchOn;
    return (
      <Container fluid className="App">
        <header className="App-header">
          <h1>College Costs... What?</h1>
        </header>
          <Jumbotron >
          {
            searchOn ? <Searchbox searchSchools={universities => this.searchSchools(universities)}  /> : 
            <Button className="App-submit" variant='primary' size="lg" block onClick={this.newSearch}>
            New Search
            </Button>
            }
            </Jumbotron>
          {this.state.universities !== [] && <UniversityList universities={this.state.universities} searchOn={this.state.searchOn} hideSearchbox={this.hideSearchbox} moreInfoSearch={this.moreInfoSearch}/>}
          
        
      </Container>
    );
  }
} 
 
export default App;
