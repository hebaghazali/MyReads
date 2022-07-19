import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';

import { getAll } from './utils/BooksAPI';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await getAll();
      setBooks(res);

      console.log();
    };

    getBooks();
  }, []);

  return (
    <div className='app'>
      <Routes>
        <Route exact path='/' element={<ListBooks books={books} />} />
        <Route path='/search' element={<SearchBooks />} />
      </Routes>
    </div>
  );
}

export default App;
