import React from 'react';
import './UniversityList.css';
import University from '../University/University';

class UniversityList extends React.Component {
  render() {
    return (
      <div className="UniversityList">
        {this.props.universities.map(university => {
          return <University university={university} />;
        })}
      </div>
    );
  }
}

export default UniversityList;
