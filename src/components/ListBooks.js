import { Link } from 'react-router-dom';
import ListBooksContent from './ListBooksContent';

const ListBooks = ({ books }) => {
  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>

      <ListBooksContent books={books} />

      <div className='open-search'>
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  );
};

export default ListBooks;
