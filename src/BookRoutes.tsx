import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BooksList from './components/BooksList';
import Book from './components/Book';
import AddBookForm from './components/AddBookForm';

const BookRoutes = () => {
  return (
    <Routes>
      <Route index element={<BooksList />} />
      <Route path="addBook" element={<AddBookForm />} />
      <Route path=":id" element={<Book />} />
    </Routes>
  );
};

export default BookRoutes;
