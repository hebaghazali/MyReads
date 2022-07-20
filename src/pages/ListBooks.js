import { Link } from 'react-router-dom';
import ListBooksContent from '../components/ListBooksContent';

const ListBooks = ({ bookshelves, onUpdateShelf }) => {
  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>

      <ListBooksContent
        bookshelves={bookshelves}
        onUpdateShelf={onUpdateShelf}
      />

      <div className='open-search'>
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  );
};

export default ListBooks;
