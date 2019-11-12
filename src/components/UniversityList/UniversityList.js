import React from 'react';
import './UniversityList.css';
import University from '../University/University';

class UniversityList extends React.Component {
  render() {
    return (
      <div className="UniversityList">
        <University />
        <University />
        <University />
      </div>
    );
  }
}

export default UniversityList;
