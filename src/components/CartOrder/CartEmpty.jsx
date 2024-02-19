import './CartEmpty.css';
import { Link } from 'react-router-dom';

function CartEmpty() {
    return (
        <div className="main-cart">
            <div className="btn-return">
                <Link to="booklist">List books</Link>
            </div>
            <div className="empty-cards">
                <img className="img-cart" src="./images/cart.svg" alt="empty cards"/>
                <span className="text-empty">Cart empty</span>
            </div>
            <div className="totalPrice-cart">
                <div>
                    Total price:<span className="total-cart">  </span><span>$</span>
                </div>
                <button type="button" className="checkout">Purchase</button>
            </div>
        </div>    
    );
}

export default CartEmpty;