const Book = ({ book, onUpdateShelf, onGetShelfTitle }) => {
  return (
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
            defaultValue={onGetShelfTitle(book)}
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
  );
};

export default Book;
