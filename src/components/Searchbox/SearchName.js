import React from 'react';
import Form from 'react-bootstrap/Form';
import './SearchName.css';

export class SearchName extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.inputRef = React.createRef();
    this.node = this.inputRef.current;
  }

  handleSubmit(event) {
    console.log(event.target.value);
    console.log(this.inputRef.current.value);
    this.props.onNameChange(this.inputRef.current.value);
    event.preventDefault();
  }

  onChange(event) {
    console.log(event.target.value);
    console.log(this.inputRef.current.value)
    this.props.onNameChange(this.inputRef.current.value);
    event.persist();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} >
        <Form.Text className="text-muted">
          Search for a school by name.
        </Form.Text>
        <Form.Group controlId="formSchoolName">
          <Form.Label>Name of School</Form.Label>
          <Form.Control className="name" type="text" placeholder="Enter name" ref={this.inputRef} name="name"   />
          <input className="submit" type="submit" value="Submit" />
        </Form.Group>
        </Form>
    );
  }
  
  componentDidMount() {
    this.inputRef.current.focus();
    //console.log(this.inputRef.current);
  }
  
}


/*
onChange={this.onChange}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    console.log(this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
*/