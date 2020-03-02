import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';
import './ProgramComponents.css';

function Contents(props) {
  return (
        <Card className="col-md-4 mb-3 info-card" > 
              <Accordion.Toggle className="title" as={Card.Header} eventKey={props.eventKey}  >
        {props.infoRow.major.substring(props.infoRow.major.length-1, props.infoRow.major[0])}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={props.eventKey} >
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>Degree Level: {props.infoRow.degree}</ListGroup.Item>
            <ListGroup.Item>Median Earnings: ${props.infoRow.earnings.toLocaleString("USD")}</ListGroup.Item>
            {(props.infoRow.medianD && props.infoRow.meanD ) && <ListGroup.Item>Median Debt of Graduated Students: ${props.infoRow.medianD.toLocaleString("USD")} </ListGroup.Item>}
            {(!props.infoRow.medianD && props.infoRow.meanD) && <ListGroup.Item>Mean Debt of Graduated Students: ${props.infoRow.meanD.toLocaleString("USD")} </ListGroup.Item> }  
  {props.infoRow.monthly && <ListGroup.Item>Average Monthly Payments for Student Loans: ${props.infoRow.monthly.toLocaleString("USD")}</ListGroup.Item> }  
          </ListGroup>
        </Card.Body>
      </Accordion.Collapse>
      </Card>
  );
}
export function InfoRow(props) {
  return (
    <CardGroup className="moreInfoGroup" >
        <Accordion className="moreInfoGroup" >
          { props.infoRows.map(infoRow => {
          return <Contents infoRow={infoRow}  key={props.infoRows.indexOf(infoRow)} eventKey={props.infoRows.indexOf(infoRow)} />; })}
        </Accordion>
        </CardGroup>
  );
}
