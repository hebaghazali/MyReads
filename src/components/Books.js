const Books = ({ books, booksOnShelf, onUpdateShelf }) => {
  const bookIsOnShelf = book => {
    return booksOnShelf.some(b => b.id === book.id);
  };

  const findShelf = book => {
    return booksOnShelf.find(b => b.id === book.id).shelf;
  };

  const getShelf = book => {
    if (book.shelf) return book.shelf;

    return bookIsOnShelf(book) ? findShelf(book) : 'none';
  };

  return (
    <ol className='books-grid'>
      {books.map(book => (
        <li key={book.id}>
          <div className='book'>
            <div className='book-top'>
              <div
                className='book-cover'
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${book.imageLinks?.thumbnail})`,
                }}
              ></div>
              <div className='book-shelf-changer'>
                <select
                  onChange={e => onUpdateShelf(book, e.target.value)}
                  defaultValue={getShelf(book)}
                >
                  <option disabled>Move to...</option>
                  <option value='currentlyReading'>Currently Reading</option>
                  <option value='wantToRead'>Want to Read</option>
                  <option value='read'>Read</option>
                  <option value='none'>None</option>
                </select>
              </div>
            </div>
            <div className='book-title'>{book.title}</div>
            <div className='book-authors'>
              {book.authors instanceof Array
                ? book.authors.map(author => `${author} `)
                : book.authors}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Books;
