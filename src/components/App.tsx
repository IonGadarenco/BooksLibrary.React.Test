import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import NotFound from './NotFound';
import BookRoutes from '../BookRoutes';

function App() {
  return (
    <>
      <Navbar/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/*" element={<BookRoutes/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
