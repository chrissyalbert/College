import React from 'react';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import UniversityList from '../UniversityList/UniversityList';
import Searchbox from '../Searchbox/searchbox';
import { Scorecard } from '../../util/scorecard';
//import SearchDialog from '../SearchDialog/SearchDialog';
//import { stateParams, regionParams, urbanParams} from '../SearchDialog/locationSearch';
//import { schoolGetter } from '../../util/scorecard';

/*const university = {
  unitid: 100636,
  year: 2003,
  inst_name: "Community College of the Air Force",
  address: "130 W Maxwell Blvd",
  state_abbr: "AL",
  fips: 1,
  zip: "36112-6613",
  phone_number: "3349536436",
  city: "Montgomery",
};
*/
//const universities = [university, university, university, university, university, university];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      universities: []
    }
    this.searchSchools = this.searchSchools.bind(this);
  }

  searchSchools(...params) {
    Scorecard.search(...params).then(universities => {this.setState({universities: universities})});
    //console.log(Scorecard.search(...params));
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
