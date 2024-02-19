import "./Header.css";
import { Link } from 'react-router-dom';

function Header (){
    return (
        <header className="header">
            <div className="logo">
                <Link to="signin">JS BAND STORE /</Link>
                <span className="autor">Stanislav Tsyhanok</span>
            </div>
        </header>
    );
}

export default Header;