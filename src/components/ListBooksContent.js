import Bookshelf from './Bookshelf';
import { useState, useEffect } from 'react';
import { update } from '../utils/BooksAPI';

const ListBooksContent = ({ books }) => {
  const updateShelf = (book, shelf) => {
    update(book, shelf);

    const addBookToShelf = bookshelf => {
      return [...bookshelf, book];
    };

    const removeBookFromShelf = bookshelf => {
      return bookshelf.filter(b => b.id !== book.id);
    };

    setBookshelves(current => {
      return {
        ...current,
        [book.shelf]: removeBookFromShelf(current[book.shelf]),
        [shelf]: addBookToShelf(current[shelf]),
      };
    });
  };

  const [bookshelves, setBookshelves] = useState({
    currentlyReading: [],
    wantToRead: [],
    read: [],
  });

  useEffect(() => {
    const bookshelvesSorted = {
      currentlyReading: [],
      wantToRead: [],
      read: [],
    };

    books.forEach(book => {
      bookshelvesSorted[book.shelf].push(book);
    });

    setBookshelves(bookshelvesSorted);
  }, [books]);

  return (
    <div className='list-books-content'>
      <div>
        {Object.keys(bookshelves).map(bookshelfTitle => {
          return (
            <Bookshelf
              key={bookshelfTitle}
              bookshelfTitle={bookshelfTitle}
              books={bookshelves[bookshelfTitle]}
              onUpdateShelf={updateShelf}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListBooksContent;
