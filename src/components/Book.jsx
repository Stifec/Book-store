
function Book (props){

    const bookem = props.data.books;
    // console.log(bookem)

    return (
        <>
            {bookem.map((item,indx) => 
                <section key={indx}>
                    <h3>{item.title}</h3>
                    <span>{item.price}</span>
                </section>
            )}
        </>
    );
}


export default Book;