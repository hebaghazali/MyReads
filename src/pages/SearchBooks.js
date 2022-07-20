import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { search } from '../utils/BooksAPI';
import Books from '../components/Books';

const SearchBooks = ({ books, onUpdateShelf }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const getBooks = async inputValue => {
      if (inputValue === '') {
        setSearchResult([]);
        return;
      }

      const res = await search(inputValue, 10);
      setSearchResult(res?.error ? [] : res);
    };

    getBooks(searchQuery);
  }, [searchQuery]);

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link className='close-search' to='/'>
          Close
        </Link>
        <div className='search-books-input-wrapper'>
          <input
            type='text'
            placeholder='Search by title, author, or ISBN'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className='search-books-results'>
        {searchQuery !== '' ? (
          <Books
            books={searchResult}
            booksOnShelf={books}
            onUpdateShelf={onUpdateShelf}
          />
        ) : null}
      </div>
    </div>
  );
};

export default SearchBooks;
