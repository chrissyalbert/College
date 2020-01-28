import React from 'react';
import Card from 'react-bootstrap/Card';

export function Location(props) {
  return (
    <section className="University-Location">
                    <h6>Location</h6>
                    <Card.Text>{props.university.city}, {props.university.state}</Card.Text>
                  </section>
  );
}