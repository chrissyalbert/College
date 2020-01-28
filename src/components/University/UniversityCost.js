import React from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { ModalWrapper } from './ModalWrapper';

function Academic() {
  return (
    <>
    <Modal.Header closeButton>
      <Modal.Title>What is the annual cost?</Modal.Title>
    </Modal.Header>
    <Modal.Body>This is the total cost of tuition, fees, living expenses for full time, first time undergraduates for an entire academic year. For public schools, the cost accounts for students paying in-state tuition. Expenses for living arrangements(on campus, off campus independent, off campus with family) are combined via a weighted average for those students utilizing those options at the school.</Modal.Body>
    </>
  );
}

function Program() {
  return (
    <>
    <Modal.Header closeButton>
      <Modal.Title>What is the annual cost for the largest program?</Modal.Title>
    </Modal.Header>
    <Modal.Body>This school follows a program-based or continuous enrollment calendar system. This is the annual cost of tuition, fees, living expenses for full time, first time undergraduates to attend the school's largest program. For public schools, the cost accounts for students paying in-state tuition. Expenses for living arrangements(on campus, off campus independent, off campus with family) are combined via a weighted average for those students utilizing those options at the school.</Modal.Body>
    </>
  );
}

function CostAcademic() {
  return (
    <ModalWrapper>
      <Academic />
    </ModalWrapper>
  );
}

function CostProgram() {
  return (
    <ModalWrapper>
      <Program />
    </ModalWrapper>
  );
}

export function CostAcademicComponent(props) {
  return (
    <>
      <h6>Annual Cost: </h6>
        <Card.Text>
          <CostAcademic />
          <br/>
          ${props.university.costAcademic.toLocaleString("USD")}
        </Card.Text>
    </>
  );
}

export function ProgramCostComponent(props) {
  return (
    <>
      <h6>Annual Cost for Largest Program: </h6>
        <Card.Text>
          <CostProgram />
          <br/>
          ${props.university.costProgram.toLocaleString("USD")}
        </Card.Text>
    </>
  );
}