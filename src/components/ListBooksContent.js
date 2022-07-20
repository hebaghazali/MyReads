import Bookshelf from './Bookshelf';

const ListBooksContent = ({ bookshelves, onUpdateShelf }) => {
  return (
    <div className='list-books-content'>
      <div>
        {Object.keys(bookshelves).map(bookshelfTitle => {
          return (
            <Bookshelf
              key={bookshelfTitle}
              bookshelfTitle={bookshelfTitle}
              books={bookshelves[bookshelfTitle]}
              onUpdateShelf={onUpdateShelf}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListBooksContent;
