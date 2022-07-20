import Book from './Book';

const Books = ({ books, booksOnShelf, onUpdateShelf }) => {
  const bookIsOnShelf = book => {
    return booksOnShelf.some(b => b.id === book.id);
  };

  const findShelf = book => {
    return booksOnShelf.find(b => b.id === book.id).shelf;
  };

  const getShelfTitle = book => {
    if (book.shelf) return book.shelf;

    return bookIsOnShelf(book) ? findShelf(book) : 'none';
  };

  return (
    <ol className='books-grid'>
      {books.map(book => (
        <li key={book.id}>
          <Book
            book={book}
            onUpdateShelf={onUpdateShelf}
            onGetShelfTitle={getShelfTitle}
          />
        </li>
      ))}
    </ol>
  );
};

export default Books;
