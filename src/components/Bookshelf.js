import Books from './Books';

const Bookshelf = ({ bookshelfTitle, books, onUpdateShelf }) => {
  const title = bookshelfTitle.replace(/([A-Z])/g, ' $1');
  const finalTitle = title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{finalTitle}</h2>
      <div className='bookshelf-books'>
        <Books
          books={books}
          onUpdateShelf={onUpdateShelf}
          booksOnShelf={books}
        />
      </div>
    </div>
  );
};

export default Bookshelf;
