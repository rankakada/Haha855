import './header.css';
import logo from '../../assets/logo_haha855.gif';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Haha855" />
            </div>
        </header>
    );
};

export default Header;