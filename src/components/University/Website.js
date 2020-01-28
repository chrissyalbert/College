import React from 'react';
import Card from 'react-bootstrap/Card';

export function Website(props) {
  return (
    <section className="University-website">
                      <h6>Website: </h6>
                      <Card.Text>
                        <a href={props.university.URL} target="_blank" rel="noopener noreferrer" className="urlStyle">{props.university.URL}</a>
                      </Card.Text>    
                  </section>
  );
}