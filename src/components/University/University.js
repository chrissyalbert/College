import React  from 'react';
import './University.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Location } from './Location';
import { SizeComponent } from './Size';
import { Website } from './Website';
import { AdmissionsComponent } from './Admissions';
import { SATComponent, ACTComponent } from './SAT';
import { CostAcademicComponent, ProgramCostComponent } from './UniversityCost';

class University extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.university.id
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(obj) {
    this.props.moreInfoSearch(obj);
  }
  render() {
    return (  
        <Card className="University">
          <Card.Body>
            <Card.Title>{this.props.university.name}</Card.Title>
              <div className="University-information">
                  <Location university={this.props.university} />
                  {this.props.university.size && 
                  <SizeComponent university={this.props.university} />
                  }
                  <Website university={this.props.university} />
                  <section className="University-admissions">
                    {this.props.university["Admission Rate"] && 
                    <AdmissionsComponent university={this.props.university} />
                    }
                    {this.props.university["Average SAT score"] && 
                    <SATComponent university={this.props.university} />
                    }
                    {this.props.university["Average ACT score"] && 
                    <ACTComponent university={this.props.university} />
                    }
                  </section>
                  <section className="University-cost">
                    {this.props.university.costAcademic && 
                    <CostAcademicComponent university={this.props.university} />
                    }
                    {this.props.university.costProgram && 
                    <ProgramCostComponent university={this.props.university} />
                    }
                  </section>
              </div>
                <Button className="moreInfo" variant="primary" onClick={() => this.handleClick({id: this.state.id})}>
                    More Information
                </Button>  
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
