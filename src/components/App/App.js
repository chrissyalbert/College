import React from 'react';
import './App.css';
import UniversityList from '../UniversityList/UniversityList';
import SearchDialog from '../SearchDialog/SearchDialog';

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
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>College Costs... What?</h1>
        </header>
        <main>
          <SearchDialog />
          <UniversityList universities={universities}/>
        </main>
      </div>
    );
  }
}
 
export default App;
