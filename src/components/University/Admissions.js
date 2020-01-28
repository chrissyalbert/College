import React from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { ModalWrapper } from './ModalWrapper';

function Admissions() {
  return (
    <>
    <Modal.Header closeButton>
      <Modal.Title>What is the admission rate?</Modal.Title>
    </Modal.Header>
    <Modal.Body>This number represents the Fall admissions rate, which is the number of undergraduates admitted to the school divided by the number of undergraduates who applied. It is also known as the acceptance rate. For universities with multiple branches, this number represents the admission rate for that particular branch.</Modal.Body>
    </>
  );
}

function AdmissionRate() {
  return (
    <ModalWrapper>
      <Admissions />
    </ModalWrapper>
  );
}

export function AdmissionsComponent(props) {
  return (
    <>
      <h6>Admission Rate: </h6>
      <Card.Text>
        <AdmissionRate />
        <br/>
        {Math.round(props.university["Admission Rate"] * 100) + '%'}
      </Card.Text> </>
  );
}