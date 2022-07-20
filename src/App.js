import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';

import { getAll, update } from './utils/BooksAPI';

function App() {
  const updateShelf = (book, shelf) => {
    const prevShelf = book.shelf;

    book.shelf = shelf;
    update(book, shelf);

    const addBookToShelf = bookshelf => {
      if (bookshelf.some(b => b.id === book.id)) return bookshelf;

      setBooks(currentBooks => [...currentBooks, book]);
      return [...bookshelf, book];
    };

    const removeBookFromShelf = bookshelf => {
      setBooks(currentBooks => currentBooks.filter(b => b.id !== book.id));
      return bookshelf.filter(b => b.id !== book.id);
    };

    setBookshelves(currentBookshelves => {
      if (shelf === 'none') {
        delete book.shelf;
        return {
          ...currentBookshelves,
          [prevShelf]: removeBookFromShelf(currentBookshelves[prevShelf]),
        };
      }

      if (prevShelf === undefined) {
        return {
          ...currentBookshelves,
          [shelf]: addBookToShelf(currentBookshelves[shelf]),
        };
      }

      return {
        ...currentBookshelves,
        [prevShelf]: removeBookFromShelf(currentBookshelves[prevShelf]),
        [shelf]: addBookToShelf(currentBookshelves[shelf]),
      };
    });
  };

  const [books, setBooks] = useState([]);

  const [bookshelves, setBookshelves] = useState({
    currentlyReading: [],
    wantToRead: [],
    read: [],
  });

  useEffect(() => {
    const getBooks = async () => {
      const res = await getAll();
      setBooks(res);
    };

    getBooks();
  }, []);

  useEffect(() => {
    const bookshelvesClassified = {
      currentlyReading: [],
      wantToRead: [],
      read: [],
    };

    books.forEach(book => {
      bookshelvesClassified[book.shelf].push(book);
    });

    setBookshelves(bookshelvesClassified);
  }, [books]);

  return (
    <div className='app'>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <ListBooks bookshelves={bookshelves} onUpdateShelf={updateShelf} />
          }
        />
        <Route
          path='/search'
          element={
            <SearchBooks
              books={books}
              bookshelves={bookshelves}
              onUpdateShelf={updateShelf}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
