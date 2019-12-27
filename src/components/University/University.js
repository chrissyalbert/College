import React from 'react';
import './University.css';
import Card from 'react-bootstrap/Card';

class University extends React.Component {
  render() {
    return (  
      <div>
        <Card className="University">
          <Card.Body>
              <Card.Title>{this.props.university.name}</Card.Title>
              <Card.Text className="University-information">
                  <div className="University-Location">
                    <h6>Location</h6>
                    <p>{this.props.university.city}, {this.props.university.state}</p>
                  </div>
                  <div className="University-websites">
                    <Card.Link><div>
                      <p>Website: <a href={this.props.university.URL} target="_blank" rel="noopener noreferrer" className="urlStyle">{this.props.university.URL}</a>
                      </p>
                    </div></Card.Link>                  
                    {this.props.university["School Price Calculator"] && 
                    <Card.Link><div>
                        <p>School Price Calculator: <a href={this.props.university["School Price Calculator"]} target="_blank" rel="noopener noreferrer" className="urlStyle">{this.props.university["School Price Calculator"]}</a></p>
                    </div></Card.Link>
                    }
                  </div>
                  <div classname="Univeristy-admissions">
                  {this.props.university["Admission Rate"] &&
                    <p>Admission Rate: {Math.round(this.props.university["Admission Rate"] * 100) + '%'}</p>
                  }
                  {this.props.university["Average SAT score"] &&
                    <p>Average SAT score: {this.props.university["Average SAT score"]}</p>
                  }
                  </div>
                  <div classname="Univeristy-cost">
                  {this.props.university.costAcademic &&
                    <p>Price Per Year: ${this.props.university.costAcademic.toLocaleString("USD")}</p>
                  }
                  {this.props.university.costProgram &&
                    <p>Price Per Year: ${this.props.university.costProgram.toLocaleString("USD")}</p>
                  }
                  </div>
              </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default University;