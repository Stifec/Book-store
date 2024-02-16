import './Book.css';

function Book (props){

    const bookem = props.data.books;
    // console.log(bookem)

    return (
        <>
            {bookem.map((item,indx) => 
                <section key={indx}>
                   
                        <div class="book-item">
                            <div class="book-image">
                               <img class="imag" src={item.image} alt="foto book"/>
                            </div>
                            <p class="item-discription">{item.shortDescription}</p>
                            <div class="price-in">
                            <span class="item-price">{item.price} $</span>
                            <button id={item.id} type="button" class="item-btn-book">View</button> 
                            </div>
                        </div> 
                    
                </section>
            )}
        </>
    );
}


export default Book;