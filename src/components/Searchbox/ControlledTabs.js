import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import { SearchProgram } from "./SearchProgram";
import { SearchDegree } from "./SearchDegree";
import { SearchState } from "./SearchState";
import { SearchRegion } from "./SearchRegion";
import { SearchOwnership } from "./SearchOwnership";
import { SearchSize } from "./SearchSize";
import { SearchName } from "./SearchName";

function Attention() {
  return (
    <span className="attention">
      Please select both academic field and degree type.
    </span>
  );
} 

export function ControlledTabs(props) {
  const [key, setKey] = useState('about');
  return (
    <Tabs id="search-menu" activeKey={key} onSelect={k => setKey(k)}>
      <Tab eventKey="about" title="About">
        <Card.Body>
          <Card.Title>What is this website all about?</Card.Title>
          <Card.Text>
      This website is a tool to help you research colleges with data provided by the U.S. Department of Education College Scorecard. Search for a school by name or create a custom search by school location, program, degree, or public/private options.
          </Card.Text>
        </Card.Body>
      </Tab>
      <Tab eventKey="name" title="Search By Name">
        <Card.Body id="name">
          <SearchName onNameChange={props.onNameChange} />
        </Card.Body>
      </Tab>
      <Tab eventKey="custom-search" title="Custom Search" >
      <Accordion className="row justify-content-center">
      <Accordion.Toggle className="search" as={Card.Header} variant="link" eventKey="1">
                  Narrow your search by <strong>Location</strong> 
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <SearchRegion selectedRegions={props.selectedRegions} onRegionChange={props.onRegionChange} />
                <SearchState selectedStates={props.selectedStates} onStateChange={props.onStateChange} />
              </Card.Body>
            </Accordion.Collapse>
            <Accordion.Toggle className="search" as={Card.Header} variant="link" eventKey="2">
                  Narrow your search by <strong>Program</strong> and <strong>Degree</strong>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <SearchProgram selectedPrograms={props.selectedPrograms} onProgramChange={props.onProgramChange}  />
                {props.missingDegree && <Attention /> }
                {props.programDegree && <SearchDegree selectedDegrees={props.selectedDegrees} selectedPrograms={props.selectedPrograms} onDegreeChange={props.onDegreeChange} /> } 
              </Card.Body>
            </Accordion.Collapse>
            <Accordion.Toggle className="search" id="last" as={Card.Header} variant="link" eventKey="3">
                  Narrow your search by <strong>Public/Private</strong> and <strong>Size</strong> options
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <SearchOwnership selectedOwnership={props.selectedOwnership} onOwnershipChange={props.onOwnershipChange} /> 
                <SearchSize selectedSize={props.selectedSize} onSizeChange={props.onSizeChange} />
              </Card.Body>
            </Accordion.Collapse>
            <Button className="SearchBox-submit" variant='primary' size="lg"  onClick={props.onClick}>
          Search Schools
        </Button>
        </Accordion>
      </Tab>
    </Tabs>
  );
}