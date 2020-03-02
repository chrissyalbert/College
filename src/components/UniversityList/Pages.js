import React, { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import './pages.css';

export function Pages(props)  {
  let items = [];
  let totalPages = props.totalPages;
  const handleClick = number => {
    console.log(props.activePage);
    props.handlePageClick(number);
  };

  for (let number = 1; number <= totalPages; number++) {
    items.push(
    <Pagination.Item key={number} active={number === props.activePage} onClick={() => handleClick(number)} >
      {number}
    </Pagination.Item>
  );
}

    return (
      <div id="moreResults" className="justify-content-center container py-0 ">
        <div className="text row pt-3 pb-0">  
          <h3 className="col px-4">More Results</h3>
        </div>
        <div className="pages row">
        <Pagination className="mb-3 col px-4" >{items}</Pagination>
        </div>
        
        
      </div>
      
    );
  
}

 
/*
active={number === active}
active={number === props.activePage}
className={active && props.activePage === number}
  */