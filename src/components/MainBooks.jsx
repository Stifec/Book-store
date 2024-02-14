import './MainBooks.css';
import books from '../../data/books.json';
import Book from '../../components/Book';
import BooksSearch from '../../components/BooksSearch';

function MainBooks (){
    return (
        <div className='main'>
            <BooksSearch />
             <div class="book">
                <Book data={books} />
            </div>

        </div>
    );
}


export default MainBooks;