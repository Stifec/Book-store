import './BookCounter.css';
import { Link } from 'react-router-dom';

function BookCounter() {
    return (
        <div className="order">
            <p className="text-price">Price: <span class="price" data-base-price="52.25">52.25 $</span><span>$</span></p>
            <div className="counter">
                <button type="button" className="button-dec">-</button>
                <input className="input-counter" id="input" value="1"/>
                <button type="button" className="button-add">+</button>
            </div>
            <p className="text-price">Total price: <span class="total-price"></span> <span>$</span></p>
            <button type="button" className="btn-cart-add">Add to cart</button>
            <div className="btn-return">
                <Link to='booklist'>List books</Link>
            </div>
            <Link to='cart'><button type="button" className="btn-cart-add">Add to cart</button></Link>
        </div>

    );
}

export default BookCounter;