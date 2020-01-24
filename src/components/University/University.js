import React, { useState } from 'react';
import './University.css';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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

function ModalWrapper(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <i className="fas fa-question-circle info" onClick={handleShow}></i>
      <Modal show={show} onHide={handleClose}>
      {props.children}
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
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

function AdmissionRate() {
  return (
    <ModalWrapper>
      <Admissions />
    </ModalWrapper>
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

function SATAverage() {
  return (
    <ModalWrapper>
      <SAT />
    </ModalWrapper>
  );
}

class University extends React.Component {
  render() {
    return (  
        <Card className="University">
          <Card.Body>
            <Card.Title>{this.props.university.name}</Card.Title>
              <div className="University-information">
                  <section className="University-Location">
                    <h6>Location</h6>
                    <Card.Text>{this.props.university.city}, {this.props.university.state}</Card.Text>
                  </section>
                  {this.props.university.size && 
                  <section className="University-size">
                    <h6>Size</h6>
                    <Card.Text>
                      <SizeSchool />
                      <br/>
                      {(this.props.university.size).toLocaleString('en-US')}
                    </Card.Text>
                  </section>
                  }
                  <section className="University-websites">
                      <h6>Website: </h6>
                      <Card.Text>
                        <a href={this.props.university.URL} target="_blank" rel="noopener noreferrer" className="urlStyle">{this.props.university.URL}</a>
                      </Card.Text>    
                  </section>
                  <section className="University-admissions">
                    {this.props.university["Admission Rate"] && <>
                      <h6>Admission Rate: </h6>
                      <Card.Text>
                        <AdmissionRate />
                        <br/>
                        {Math.round(this.props.university["Admission Rate"] * 100) + '%'}
                      </Card.Text> </>
                    }
                    {this.props.university["Average SAT score"] && <>
                    <h6>Average SAT score: </h6>
                    <Card.Text>
                      <SATAverage />
                      <br/>
                      {this.props.university["Average SAT score"]}
                    </Card.Text></>
                    }
                  </section>
                  <section className="University-cost">
                    {this.props.university.costAcademic && <>
                      <h6>Annual Cost: </h6>
                      <Card.Text>
                      <CostAcademic />
                      <br/>
                      ${this.props.university.costAcademic.toLocaleString("USD")}</Card.Text></>
                    }
                    {this.props.university.costProgram && <>
                      <h6>Annual Cost for Largest Program: </h6>
                      <Card.Text>
                      <CostProgram />
                      <br/>
                      ${this.props.university.costProgram.toLocaleString("USD")}</Card.Text></>
                    }
                  </section>
              </div>
          </Card.Body>
        </Card>
    );
  }
}

export default University;

/*
{this.props.university["School Price Calculator"] && <> 
                        <h6>School Price Calculator: </h6> <Card.Text><a href={this.props.university["School Price Calculator"]} target="_blank" rel="noopener noreferrer" className="urlStyle">{this.props.university["School Price Calculator"]}</a></Card.Text></>
                    }

*/
