import React from 'react';
import './../University/University.css';
import './MoreInfo.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Location } from './../University/Location';
import { SizeComponent } from './../University/Size';
import { CostAcademicComponent, ProgramCostComponent } from './../University/UniversityCost';
import { NetCost } from './NetCost';
import { Ownership, Graduation, Locale, Men, Women, Minority } from './Components';
import { Religious } from './Religious';
import { Website } from './../University/Website';
import { AdmissionsComponent } from './../University/Admissions';
import { SATComponent, ACTComponent } from './../University/SAT';
import { OLMap } from './Map';
import { Programs } from './Programs';

export class MoreInfo extends React.Component {
  render() {
    return(
      <Container className="moreInfo">
        <Row>
          <Col>
            <header>
              <h1 className="moreInfo">{this.props.university.name}</h1>
            </header>
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6} >
            <Website university={this.props.university} />
            <Location university={this.props.university} />
            <OLMap className="map" university={this.props.university} />
          </Col>
          <Col md={4} sm={6}>
            {this.props.university.size && 
            <SizeComponent university={this.props.university} /> } 
            <Ownership university={this.props.university} />
            <Locale university={this.props.university} />
            {this.props.university.costAcademic && 
            <CostAcademicComponent university={this.props.university} /> }
            {this.props.university.costProgram && 
            <ProgramCostComponent university={this.props.university} /> }
            <NetCost university={this.props.university} />
          </Col>
          <Col md={4} sm={6} >
            {this.props.university["Average SAT score"] && 
            <SATComponent university={this.props.university} />
            }
            {this.props.university["Average ACT score"] && 
            <ACTComponent university={this.props.university} />
            }
            {this.props.university["Graduation Rate"] &&
            <Graduation university={this.props.university} />
            } 
            {this.props.university["Admission Rate"] && 
            <AdmissionsComponent university={this.props.university} />
            }
            <Men university={this.props.university} />
            <Women university={this.props.university} />
            <Minority university={this.props.university} />
            <Religious university={this.props.university} />
          </Col>

        </Row>
        <Row>
          <Col>
            <h3>Earnings and Student Loan Debt</h3>
            <p>The following is a list of programs that has data available for first year post graduation earnings and student loan debt. This data only tracks students who have received federal financial aid while attending this school. Students who received private loans are not included in this data. The cumulative debt (median or mean totals) includes only the loan dispursement amount and not any accrued interest.</p>
          </Col>
        </Row>

        <Row>
          <Programs university={this.props.university} />
          </Row>
        
        
      </Container>
    );
  }
}

/*

<Row className="justify-content-center" ></Row>
<Transfer university={this.props.university} /> 
*/