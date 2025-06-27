import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useSearchParams } from 'react-router-dom';


const BooksList = () => {
  const [searchParams, setSearchParams] = useSearchParams({n: "3"});
  const number = searchParams.get("n");

  return (
    <>
        <Helmet>
            <title>Books List Page</title>
        </Helmet>
        <div>This is a books list</div>
        <Link to={'/books/1'}>Book 1</Link>
        <Link to={'/books/2'}>Book 2</Link>
        <Link to={`/books/${number}`}>Book {number}</Link>
        <Link to={'/books/addBook'}>New Book</Link>
        <input type='number' value={number ?? ""} onChange={e => setSearchParams({ n: e.target.value})} />
    </>
  )
}

export default BooksList;