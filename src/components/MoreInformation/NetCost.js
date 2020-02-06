import React from 'react';
import Table from 'react-bootstrap/Table';

export function NetCost(props) {
  console.log(props.university.net);
  if (props.university.net) {
   return (
    <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th>Income Bracket</th>
        <th>Net Price with Federal Aid</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>$0--$30,000</td>
        <td>${props.university.net["0-30000"].toLocaleString("USD")}</td>
      </tr>
      <tr>
        <td>$31,001--$48,000</td>
        <td>${props.university.net["30001-48000"].toLocaleString("USD")}</td>
      </tr>
      <tr>
        <td>$48,001--$75,000</td>
        <td>${props.university.net["48001-75000"].toLocaleString("USD")}</td>
      </tr>
      <tr>
        <td>$75,001--$110,000</td>
        <td>${props.university.net["750001-111000"].toLocaleString("USD")}</td>
      </tr>
      <tr>
        <td>$110,000 and higher</td>
        <td>${props.university.net["110001-plus"].toLocaleString("USD")}</td>
      </tr>
    </tbody>
  </Table>
  );
  }
  
  return null;
}

/*
${props.university.net["0-30000"].toLocaleString("USD")}
*/
