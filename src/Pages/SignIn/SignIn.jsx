import './SignIn.css';
import { Link } from 'react-router-dom';

function SignIn () {
    return (
        <main className="main-signin">
            <div className="main-form">
                <img src="images/avatar_1.png" alt="avatar" class="avatar" />
                <div className="name-error">Username must be at min 4 characters and max 8</div>
                <form action="../book-list/book-list.html" method="post">
                    <div id="username_div">
                        <input type="text" placeholder="username" id="username" name="username" minlength="3" maxlength="20" required/> 
                    </div>
                    
                    <div className="btn-in">
                        <Link to= 'booklist'><button type="button" className="button-form-in">Sign-in</button></Link>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default SignIn;
