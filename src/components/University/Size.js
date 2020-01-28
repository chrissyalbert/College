import React from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { ModalWrapper } from './ModalWrapper';

function Size() {
  return (
    <>
    <Modal.Header closeButton>
      <Modal.Title>What is the size of the school?</Modal.Title>
    </Modal.Header>
    <Modal.Body>This number represents the number of undergraduate degree or certificate seeking students enrolled in the Fall for the latest academic year that data is available.</Modal.Body>
    </>
  );
}

function SizeSchool() {
  return (
    <ModalWrapper>
      <Size />
    </ModalWrapper>
  );
}

export function SizeComponent(props) {
  return (
    <section className="University-size">
      <h6>Size</h6>
        <Card.Text>
          <SizeSchool />
          <br/>
          {(props.university.size).toLocaleString('en-US')}
        </Card.Text>
    </section>
  );

}