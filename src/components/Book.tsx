import React from 'react'
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const Book = () => {
    const {id} = useParams();
  return (
    <>
        <Helmet>
            <title>Book Page</title>
        </Helmet>
        <div>This is my book {id}</div>
    </> 
  )
}

export default Book;