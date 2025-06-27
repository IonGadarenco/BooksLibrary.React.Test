import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import BookRoutes from '../BookRoutes';
import Home from './Home';
import Navbar from './Navbar';
import NotFound from './NotFound';
import PrivateRoute from '../PrivateRoute';
import Login from './Login';

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/books/*"
            element={
              <PrivateRoute>
                <BookRoutes />
              </PrivateRoute>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
