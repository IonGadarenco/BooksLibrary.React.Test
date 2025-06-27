import { Book } from '@mui/icons-material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddBook from './components/AddBookForm';
import BooksList from './components/BooksList';

const BookRoutes = () => {
  return (
    <Routes>
        <Route index element={<BooksList />} />
        <Route path="addBook" element={<AddBook />} />
        <Route path=":id" element={<Book />} />
    </Routes>
  )
}

export default BookRoutes;