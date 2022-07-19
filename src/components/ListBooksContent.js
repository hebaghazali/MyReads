import Bookshelf from './Bookshelf';
import { useState, useEffect } from 'react';

const ListBooksContent = ({ books }) => {
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
          const title = bookshelfTitle.replace(/([A-Z])/g, ' $1');
          const finalTitle = title.charAt(0).toUpperCase() + title.slice(1);

          return (
            <Bookshelf
              key={Math.random().toString(20).slice(2)}
              bookshelfTitle={finalTitle}
              books={bookshelves[bookshelfTitle]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListBooksContent;
