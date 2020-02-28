import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Pagination from "react-js-pagination";
require("bootstrap/less/bootstrap.less");

function useStateSearchbox(localStorageKey) {
  const [value, setValue] = React.useState(
    sessionStorage.getItem(localStorageKey) || ''
  );
  React.useEffect(() => {
    sessionStorage.setItem(localStorageKey, value);
  }, [value]);
  return [value, setValue];
};

function paginationButton () {
  const [value, setValue] = useStateSearchbox(
    'Searchbox State'
  );
  //not correct => need to fix onClick function
  function onClick(e) { setValue(e.target.value); }

  //Do something with value--stringify it, parse it
  return (
    <>
    <Button variant="primary" onClick={onClick} >

    </Button>

    <div>
      <h1>Hello React with Local Storage!</h1>
      <input value={value} type="text" onChange={onChange} />
      <p>{value}</p>
    </div>
    </>
  );
};

class Pages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 0
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }
//need to update totalItemsCount and itemsCountPerPage
  render() {
    return (
      <div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>
    );
  }
}