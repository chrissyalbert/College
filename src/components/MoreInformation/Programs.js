import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { InfoRow } from './ProgramComponents';

export function Programs(props) {
  console.log(props.university);
  if (props.university.programs) {
    let programs = props.university.programs;
    console.log(programs);
    let rows = programs.map(program => ({
      degree: program.credential.title,
      major: program.title,
      earnings: program.earnings.median_earnings,
      medianD: program.debt.median_debt,
      meanD: program.debt.mean_debt,
      monthly: program.debt.monthly_debt_payment, 
    }));
    let earnings = rows.filter(item => item.earnings);
    console.log(rows);
    console.log(earnings);
    console.log(Object.keys(earnings).length);
    //condition ? expr1 : expr2  const isEditMode = mode === 'EDIT';
    let hasEarnings = Object.keys(earnings).length > 0;
    
    return (
      <>
      {
        hasEarnings ? 
        <>
        <Row>
            <Col>
              <h3>Earnings and Student Loan Debt</h3>
              <p>The following is a list of programs that has data available for first year post graduation earnings and student loan debt. This data only tracks students who have received federal financial aid while attending this school. Students who received private loans are not included in this data. The cumulative debt (median or mean totals) includes only the loan dispursement amount and not any accrued interest.</p>
            </Col>
          </Row>
        <InfoRow infoRows={earnings} /> </> : null
      }
      </>
    );
    
}
  
  return null;
}