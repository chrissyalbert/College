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

  /*
  function Content({ this.state }) {
  switch(state) {
    case 'info':
      return <Info text={text} />;
    case 'warning':
      return <Warning text={text} />;
    case 'error':
      return <Error text={text} />;
    default:
      return null;
  }
}
renderSwitch(this.state) {
  switch(this.state) {
    case 'searchOn':
      return <Searchbox searchSchools={universities => this.searchSchools(universities)}  />;
    case 'universities':
      return <UniversityList universities={this.state.universities} searchOn={this.state.searchOn} hideSearchbox={this.hideSearchbox} moreInfoSearch={this.moreInfoSearch}/> ;
    case 'moreInfo':
      return  <MoreInfo university={this.state.moreInfo}/> ;
    default:
      return <Searchbox searchSchools={universities => this.searchSchools(universities)}  />;
  }
}
render() {
  return (
    <div>
      <div>
          // removed for brevity
      </div>
      {this.renderSwitch(param)}
      <div>
          // removed for brevity
      </div>
    </div>
  );
}
*/

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
      searchOn: true,
      moreInfo: null,
      
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
            {this.state.moreInfo && <MoreInfo university={this.state.moreInfo}/> }
          {this.state.universities !== [] && <UniversityList universities={this.state.universities} searchOn={this.state.searchOn} hideSearchbox={this.hideSearchbox} moreInfoSearch={this.moreInfoSearch}/>}
          
        
      </Container>
    );
  }
} 
 
export default App;
