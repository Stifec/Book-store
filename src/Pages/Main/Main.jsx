import './Main.css';
import books from '../../data/books.json';
import Book from '../../components/Book';

function Main (){
    return (
        <div className='main'>
            <Book data={books} />

        </div>
    );
}


export default Main;