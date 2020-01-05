import React from 'react';
import './University.css';
import Card from 'react-bootstrap/Card';

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
                  <section className="University-websites">
                    
                      <Card.Text>Website: <a href={this.props.university.URL} target="_blank" rel="noopener noreferrer" className="urlStyle">{this.props.university.URL}</a>
                      </Card.Text>
                                    
                    {this.props.university["School Price Calculator"] && 
                    
                        <Card.Text>School Price Calculator: <a href={this.props.university["School Price Calculator"]} target="_blank" rel="noopener noreferrer" className="urlStyle">{this.props.university["School Price Calculator"]}</a></Card.Text>
                    
                    }
                  </section>
                  <section className="Univeristy-admissions">
                  {this.props.university["Admission Rate"] &&
                    <Card.Text>Admission Rate: {Math.round(this.props.university["Admission Rate"] * 100) + '%'}</Card.Text>
                  }
                  {this.props.university["Average SAT score"] &&
                    <Card.Text>Average SAT score: {this.props.university["Average SAT score"]}</Card.Text>
                  }
                  </section>
                  <section className="Univeristy-cost">
                  {this.props.university.costAcademic &&
                    <Card.Text>Price Per Year: ${this.props.university.costAcademic.toLocaleString("USD")}</Card.Text>
                  }
                  {this.props.university.costProgram &&
                    <Card.Text>Price Per Year: ${this.props.university.costProgram.toLocaleString("USD")}</Card.Text>
                  }
                  </section>
              </div>
          </Card.Body>
        </Card>
    );
  }
}

export default University;