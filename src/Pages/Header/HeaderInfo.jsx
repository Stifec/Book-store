import "./HeaderInfo.css";

function HeaderInfo (){
    return (       
            <div class="header-info">
                <div>
                    <div class="cart" id="cart">
                        <a href="../cards/cards.html">
                        <img class="cart-image" src="images/cart.svg" alt="Cart" />
                        </a>
                        <div class="cart-num">0</div>
                    </div>
                </div>
                <button class="btn-sign-out" type="button">Sing-out</button>
                <img class="avatar" src="images/avatarka.jpg" alt="avatar"/>
                <span class="user-name">Username</span>
            </div>
       
    );
}

export default HeaderInfo;