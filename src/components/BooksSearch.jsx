import './BooksSearch.css';

function BooksSearch (){
    return (
        <div class="search">
            <input class="input_search" type="text" placeholder="search"/>
            <div class="select">
                <label for="price">price range:</label> 
                <select name="price" id="price">
                    <option value="all">All</option>
                    <option value="all15">from 0 to 15</option>
                    <option value="all30">from 15 to 30</option>
                    <option value="all31">more than 30</option>
                </select>
            </div>
        </div>
    );
}

export default BooksSearch;