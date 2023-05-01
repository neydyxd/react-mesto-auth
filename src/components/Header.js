import logo from '../images/logo.svg';

function Header(){
    return(
        <header className="header">
            <img className="header__logo" src={logo} alt="логотип место" />
        </header>
    )
}

export default Header;