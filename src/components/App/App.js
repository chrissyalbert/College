import React from 'react';
import './App.css';
import UniversityList from '../UniversityList/UniversityList';
import SearchDialog from '../SearchDialog/SearchDialog';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>College Costs... What?</h1>
        </header>
        <main>
          <SearchDialog />
          <UniversityList />
        </main>
      </div>
    );
  }
}
 
export default App;
