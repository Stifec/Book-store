import './BooksList.css';
import books from '../../data/books.json';
import Book from '../../components/Books/Book';
import BooksSearch from '../../components/Books/BooksSearch';

function BookList () {
    return (
        <div className='main-books'>
            <BooksSearch />
             <div className="book">
                <Book data={books} />
            </div>

        </div>
    );
}


export default BookList;