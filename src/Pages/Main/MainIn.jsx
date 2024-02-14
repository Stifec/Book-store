import './MainIn.css';

function MainIn () {
    return (
        <main class="main">

        <div class="main-form">
            <img src="images/avatar_1.png" alt="avatar" class="avatar" />
            <div class="name-error">Username must be at min 4 characters and max 8</div>
            <form action="../book-list/book-list.html" method="post">
                <div id="username_div">
                    <input type="text" placeholder="username" id="username" name="username" minlength="3" maxlength="20" required/> 
                </div>
                
                <div class="btn-in">
                    <button type="button" class="button-form-in">Sign-in</button>
                </div>
            </form>
        </div>
    </main>
    );
}

export default MainIn;
