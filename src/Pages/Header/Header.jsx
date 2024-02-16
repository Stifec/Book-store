import "./Header.css";
import { Link } from 'react-router-dom';

function Header (){
    return (
        <header class="header">
            <div class="logo">
                <Link to="signin">JS BAND STORE /</Link>
                <span class="autor">Stanislav Tsyhanok</span>
            </div>
        </header>
    );
}

export default Header;