import './Book.css';
import { Link } from 'react-router-dom';

function Book (props){

    const bookem = props.data.books;
    console.log(bookem)

    return (
        <>
            {bookem.map((item,indx) => 
                <section key={indx}>
                    <div className="book-item">
                        <div className="book-image">
                            <img className="imag" src={item.image} alt="foto book"/>
                        </div>
                        <p className="item-discription">{item.shortDescription}</p>
                        <div className="price-in">
                            <span className="item-price">{item.price} $</span>
                            <Link to='specificbook'><button id={item.id} type="button" className="item-btn-book">View</button></Link> 
                        </div>
                    </div> 
                    
                </section>
            )}
        </>
    );
}


export default Book;