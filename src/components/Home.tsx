import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => { 
  return (
    <>
        <Helmet>
            <title>Home Page</title>
        </Helmet>
        <div className='homepageContent'>This is the Home page</div>
    </>
  )
}

export default Home;