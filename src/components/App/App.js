import React from 'react';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import UniversityList from '../UniversityList/UniversityList';
import Searchbox from '../Searchbox/searchbox';
import { Scorecard } from '../../util/scorecard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      universities: []
    }
    this.searchSchools = this.searchSchools.bind(this);
  }

  searchSchools(obj) {
    Scorecard.search(obj).then(universities => {this.setState({universities})});
    }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>College Costs... What?</h1>
        </header>
        <main>
          <Searchbox searchSchools={universities => this.searchSchools(universities)}/>
          <UniversityList universities={this.state.universities} />
          
        </main>
      </div>
    );
  }
} 
  

 
export default App;
