import React from 'react';
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
    return <InfoRow infoRows={earnings} />
}
  
  return null;
}