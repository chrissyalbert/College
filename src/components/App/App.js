import React from 'react';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import UniversityList from '../UniversityList/UniversityList';
import Searchbox from '../Searchbox/searchbox';
import SearchDialog from '../SearchDialog/SearchDialog';
import { stateParams, regionParams, urbanParams} from '../SearchDialog/locationSearch';
//import { schoolGetter } from '../../util/scorecard';

const university = {
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

const universities = [university, university, university, university, university, university];

class App extends React.Component {
  /*
  searchAPI(state, region, urban
    //program, degree, location, size, type, sortBy
    ) {
    //console.log('Searching College Scorecard API for universities that meet your criteria.');
    schoolGetter({
  
    });
  }
  */


  // to be added later in render...<main>
  // <UniversityList universities={this.state.universities} />
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>College Costs... What?</h1>
        </header>
        <main>
          <Searchbox />
          
          
        </main>
      </div>
    );
  }
}
 
export default App;
