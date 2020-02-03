import React from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { ModalWrapper } from './ModalWrapper';

function SAT() {
  return (
    <>
    <Modal.Header closeButton>
      <Modal.Title>What is the average SAT score?</Modal.Title>
    </Modal.Header>
    <Modal.Body>This is the average SAT score for accepted students for the latest academic year that data is available. These scores use the post March 2016 scoring system.</Modal.Body>
    </>
  );
}

function SATAverage() {
  return (
    <ModalWrapper>
      <SAT />
    </ModalWrapper>
  );
}

export function SATComponent(props) {
  return (
    <>
      <h6>Average SAT score: </h6>
      <Card.Text>
        <SATAverage />
        <br/>
        {props.university["Average SAT score"]}
      </Card.Text>
    </>
  );
}

function ACT() {
  return (
    <>
    <Modal.Header closeButton>
      <Modal.Title>What is the midpoint cumulative ACT score?</Modal.Title>
    </Modal.Header>
    <Modal.Body>This is the median cumulative ACT score for accepted students for the latest academic year that data is available. </Modal.Body>
    </>
  );
}

function ACTMidpoint() {
  return (
    <ModalWrapper>
      <ACT />
    </ModalWrapper>
  );
}

export function ACTComponent(props) {
  return (
    <>
      <h6>Midpoint Cumulative ACT score: </h6>
      <Card.Text>
        <ACTMidpoint />
        <br/>
        {props.university["Average ACT score"]}
      </Card.Text>
    </>
  );
}