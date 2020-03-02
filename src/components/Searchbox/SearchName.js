import React from 'react';
import Form from 'react-bootstrap/Form';
import './SearchName.css';

export class SearchName extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputRef = React.createRef();
    this.node = this.inputRef.current;
  }

  handleSubmit(event) {
    console.log(event.target.value);
    console.log(this.inputRef.current.value);
    this.props.onNameChange(this.inputRef.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} >
        <Form.Group controlId="formSchoolName">
          <Form.Label>Name of School</Form.Label>
          <Form.Control className="name" type="text" placeholder="Enter name" ref={this.inputRef} name="name" />
          <input className="submit btn-primary" type="submit" value="Search" />
        </Form.Group>
        </Form>
    );
  }
  
  componentDidMount() {
    this.inputRef.current.focus();
    //console.log(this.inputRef.current);
  }
  
}
