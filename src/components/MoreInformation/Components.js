import React from 'react';

export function Ownership(props) {
  switch(props.university.ownership) {
    case 1:
      return (
        <>
        <h6>School Ownership:</h6>
        <p>Public University</p>
        </>
      );
    case 2:
      return (
        <>
        <h6>School Ownership:</h6>
        <p>Private University</p>
        </>
      );
    case 3:
      return (
        <>
        <h6>School Ownership:</h6>
        <p>Private University (for profit)</p>
        </>
      );
    default:
      return null;
  }
}

export function Graduation(props) {
  return (
    <>
      <h6>Graduation Rate:</h6>
      <p>{Math.round(props.university["Graduation Rate"] * 100) + '%'}</p>
    </>
  );
}

export function Locale(props) {
  switch(props.university.locale) {
    case 11:
      case 12:
        case 13:
      return (
        <>
        <h6>School Setting:</h6>
        <p>City</p>
        </>
      );
    case 21:
      case 22:
        case 23:
      return (
        <>
        <h6>School Setting:</h6>
        <p>Suburb</p>
        </>
      );
    case 31:
      case 32:
        case 33:
      return (
        <>
        <h6>School Setting:</h6>
        <p>Town</p>
        </>
      );
      case 41:
        case 42:
          case 43:
        return (
          <>
          <h6>School Setting:</h6>
          <p>Rural</p>
          </>
        );
    default:
      return null;
  }
}