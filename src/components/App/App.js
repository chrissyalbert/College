import React from 'react';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import UniversityList from '../UniversityList/UniversityList';
import Searchbox from '../Searchbox/searchbox';
import { Scorecard } from '../../util/scorecard';
import Button from 'react-bootstrap/Button';

/*
function noResults() {
  <div>

  </div>
}
*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      universities: [],
      searchOn: true
    }
    this.searchSchools = this.searchSchools.bind(this);
    this.newSearch =this.newSearch.bind(this);
    this.hideSearchbox = this.hideSearchbox.bind(this);
  }

  searchSchools(obj) {
    Scorecard.search(obj).then(universities => {this.setState({universities})});
    }
  
  hideSearchbox() {
    this.setState({
      searchOn: false
    });
  }

  newSearch() {
    this.setState({
      searchOn: true
    }, () => console.log(this.state));
  }
  
  componentDidUpdate() {
    if(this.state.searchOn) {
      this.setState({
        searchOn: false
      });
    } 
  }


  
  render() {
    const searchOn = this.state.searchOn;
    return (
      <div className="App">
        <header className="App-header">
          <h1>College Costs... What?</h1>
        </header>
        <main>
          {
            searchOn ? (
              <Searchbox searchSchools={universities => this.searchSchools(universities)}  />
            ) : (
              <Button className="App-submit" variant='primary' size="lg" block onClick={this.newSearch}>
                New Search
              </Button>
            )
          }
            <UniversityList universities={this.state.universities}  searchOn={searchOn} />

        </main>
      </div>
    );
  }
} 
  
/*
hideSearchbox={this.hideSearchbox}
          */
 
export default App;
