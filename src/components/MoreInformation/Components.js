import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { ModalWrapper } from './../University/ModalWrapper';

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
function Grad() {
  return (
    <>
    <Modal.Header closeButton>
      <Modal.Title>What is the graduation rate?</Modal.Title>
    </Modal.Header>
    <Modal.Body>This rate represents the percentage of full time, first time undergraduates students receive their degree within a specific time period. For students seeking a Bachelor's degree, it represents students that graduate within 6 years. For those seeking an Associate's degree, it represents students that graduate within 3 years. For certificate programs, the time varies by the length of the program.</Modal.Body>
    </>
  );
}

function GraduationRate() {
  return (
    <ModalWrapper>
      <Grad />
    </ModalWrapper>
  );
}

export function Graduation(props) {
  return (
    <>
      <h6>Graduation Rate:</h6>
      <GraduationRate />
      <br/>
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

export function Men(props) {
  let men = props.university.men === 1;
  return (
    <>
   { men ? 
    <>
    <h6>Accepts Male Students Only</h6>
    </> : null
   }
   </>
  );
}

export function Women(props) {
  let women = props.university.women === 1;
  return (
    <>
   { women ? 
    <>
    <h6>Accepts Female Students Only</h6>
    </> : null
   }
   </>
  );
}

export function Minority(props) {
  let historically = props.university.historically === 1;
  let predominantly = props.university.predominantly === 1;
  let alaskan = props.university.alaskan === 1;
  let tribal = props.university.tribal === 1;
  let asian = props.university.asian === 1;
  let native = props.university.native === 1;
  return (
    <>
   { historically ? <><h6>Historically Black University</h6></> : null }
   { predominantly ? <><h6>Predominantly Black University</h6></> : null }
   { alaskan ? <><h6>University Serving Alaskan Native or Hawaaian Native Students</h6></> : null }
   { tribal ? <><h6>Tribal University</h6></> : null }
   { asian ? <><h6>University Serving Asian American, Native American, and Pacific Islander Students</h6></> : null }
   { native ? <><h6>Native American University without Tribal Affiliation</h6></> : null }
    </>
  )
}

export function Transfer(props) {
  return (
    <>
      <h6>Transfer Rate:</h6>
      <p>{Math.round(props.university["Transfer Rate"] * 100) + '%'}</p>
    </>
  );
}

export function PercentAid(props) {
  return (
    <>
      <h6>Percent of Students with Federal Loans:</h6>
      <p>{Math.round(props.university.percent * 100) + '%'}</p>
    </>
  );
}


/*
let transfer = props.university["Transfer Rate"];
  let style = {display: 'none'};
  if (transfer ==0) {
    return <div style={style}></div>
    
  }

if (!props.university["Transfer Rate"]) {
  return null;
} else if (props.university["Transfer Rate"] === 0) {
  return null;
} 
*/

/*


*/